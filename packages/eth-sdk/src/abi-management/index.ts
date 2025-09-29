import debug from 'debug'
import { dirname, join } from 'path'

import { traverseContractsMap } from '../config/traverse'
import { Abi, EthSdkCtx } from '../types'
import { fetchAbi } from './abi'
import { GetAbi } from './types'

export type { GetAbi }

export const d = debug('@gnosis-guild/eth-sdk:abi')

export async function gatherABIs({ config, fs, cliArgs }: EthSdkCtx) {
  await traverseContractsMap(config.contracts, async (network, key, address) => {
    const fullAbiPath = join(cliArgs.workingDirPath, 'abis', network, ...key) + '.json'
    d(`Getting ABI for ${key.join('.')}`)

    if (!fs.exists(fullAbiPath)) {
      d('ABI doesnt exist already. Fetching it')
      const abi = await fetchAbi(network, address)

      await fs.ensureDir(dirname(fullAbiPath))

      await fs.write(fullAbiPath, JSON.stringify(dedupeAbi(removeGasFields(abi))))
    }
  })
}

/** remove gas fields from all ABI fragments (ethers wrongly expects them as strings while they are actually numbers) */
const removeGasFields = (abi: Abi): Abi => abi.map(({ gas, ...rest }) => rest)

/** dedupe ABI fragments */
const dedupeAbi = (abi: Abi): Abi =>
  Array.from(new Set(abi.map((fragment) => JSON.stringify(fragment)))).map((fragment) => JSON.parse(fragment))
