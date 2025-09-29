import { fetchJson } from '../peripherals/fetchJson'
import { networkIDtoLegacySymbol, networkIDtoShortName, NetworkSymbol } from './networks'

type AbiFragment = object

export type ImplementationInfo =
  | {
      verified: true
      name: string
      abi: AbiFragment[]
      isProxy: boolean
      implementation?: `0x${string}`
      error?: boolean
    }
  | { verified: false; error?: boolean }

export interface ProxyInfo {
  target: `0x${string}` | `0x${string}`[]
  type: string
  immutable: boolean
}

type NonProxyResponse = {
  chainId: number
  address: `0x${string}`
} & ImplementationInfo

interface ProxyResponse {
  chainId: number
  address: `0x${string}`
  proxy: ProxyInfo
  implementation: ImplementationInfo
}

export const fetchAbi = async (network: NetworkSymbol, address: `0x${string}`): Promise<AbiFragment[]> => {
  const [chainId] =
    [...Object.entries(networkIDtoLegacySymbol), ...Object.entries(networkIDtoShortName)].find(
      ([, value]) => value === network,
    ) ?? []
  if (!chainId) {
    throw new Error(`Network ${network} not found`)
  }

  const url = `https://api.abi.pub/v1/chains/${chainId}/accounts/${address.toLowerCase()}`
  const result: NonProxyResponse | ProxyResponse | null = await fetchJson(url)
  if (!result) {
    throw new Error(`Error fetching ABI for contract ${address} on chain ${network}`)
  }

  const implementation = 'proxy' in result ? result.implementation : result

  if (!implementation.verified) {
    throw new Error(`Contract ${address} not verified on chain ${network}. Add the ABI manually.`)
  }

  return implementation.abi
}
