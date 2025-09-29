import type { Opaque } from 'ts-essentials'
import type { ZodTypeDef } from 'zod'
import { z } from 'zod'

import { networkIDtoShortName, NetworkSymbol } from '../abi-management/networks'
import { NestedDict } from '../utils/utility-types'

const DEFAULT_OUTPUT_PATH = './node_modules/.gnosisguild/eth-sdk-client'

export type AddressInput = `0x${string}`

/** @internal */
export type Address = Opaque<AddressInput, 'Address'>

const ADDRESS_ERROR_MESSAGE = 'An address must be 42 characters hexadecimal number string.'
const addressSchema: z.ZodType<Address, ZodTypeDef, AddressInput> = z
  .string()
  .length(42, { message: ADDRESS_ERROR_MESSAGE })
  .regex(/^0x[0-9a-fA-F]+$/, { message: ADDRESS_ERROR_MESSAGE }) as any

/**
 * @see https://info.etherscan.com/what-is-an-ethereum-address/
 * @param address - string representation of an address
 * @returns the same string branded as Address if it's a valid address
 */
export function parseAddress(address: string): Address {
  const res = addressSchema.safeParse(address)
  if (res.success) return res.data
  else {
    const errorCode = res.error.issues[0].code
    throw new Error(`"${address}" is not an address. ${ADDRESS_ERROR_MESSAGE} (${errorCode})`)
  }
}

export type NestedAddresses = NestedDict<Address>
export type NestedAddressesInput = NestedDict<AddressInput>

const nestedAddressesSchema = z.lazy(() => z.record(z.union([addressSchema, nestedAddressesSchema]))) as z.ZodSchema<
  NestedAddresses,
  ZodTypeDef,
  NestedAddressesInput
>

export type EthSdkContracts = { [key in NetworkSymbol]?: NestedAddresses }
export type EthSdkContractsInput = { [key in NetworkSymbol | (string & {})]?: NestedAddressesInput }

export const ethSdKContractsSchema: z.ZodSchema<EthSdkContracts, ZodTypeDef, EthSdkContractsInput> =
  z.record(nestedAddressesSchema)

export const flagsSchema = z.object({
  tsNocheck: z.optional(z.boolean()),
  discriminateTypes: z.boolean(),
  alwaysGenerateOverloads: z.boolean(),
})

const ethSdkConfigSchema = z
  .object({
    contracts: ethSdKContractsSchema,
    outputPath: z.string().default(DEFAULT_OUTPUT_PATH),
    typechainFlags: flagsSchema.optional(),
  })
  .strict()

/**
 * Type of *parsed* eth-sdk config.
 * @internal
 */
export interface EthSdkConfig extends z.infer<typeof ethSdkConfigSchema> {}

// We expose this for users under `EthSdkConfig` name.
/**
 * Type of eth-sdk config file contents.
 */
export type EthSdkConfigInput = z.input<typeof ethSdkConfigSchema>

export function parseEthSdkConfig(data: unknown) {
  const res = ethSdkConfigSchema.safeParse(data)
  if (res.success) {
    return res.data
  } else {
    const message = 'Failed to parse eth-sdk config'

    const [issue] = res.error.issues
    if (issue.code === 'invalid_union') {
      const [error] = issue.unionErrors[0].errors

      if (error.code === 'invalid_type') {
        throw new Error(
          message +
            '.\n' +
            `Network "${error.received}" is not supported.\n` +
            'Supported networks are:' +
            Object.values(networkIDtoShortName)
              .sort()
              .reduce((acc, net) => acc + `\n  - ${net}`, ''),
        )
      }
    }

    throw new Error(
      message +
        ':\n' +
        res.error.issues.map((issue) => `${issue.code} at "${issue.path.join('.')}": ${issue.message}`).join('\n'),
    )
  }
}

/** @internal */
export const createEthSdkConfig: (config: EthSdkConfigInput) => EthSdkConfig = parseEthSdkConfig
