import { JsonRpcProvider, Provider } from 'ethers'

import { EthSdkConfig, RpcURLs } from '../config'
import { NetworkSymbol } from './networks'

const rpcProviders: RpcURLs = {
  mainnet: `https://rpc.mevblocker.io`,
  holesky: `https://1rpc.io/holesky`,
  sepolia: `https://eth-sepolia.api.onfinality.io/public`,
}

export function getRpcProvider(config: EthSdkConfig, network: NetworkSymbol): RpcProvider | null {
  const rpcUrl = config.rpc[network] || rpcProviders[network]

  return rpcUrl ? new JsonRpcProvider(rpcUrl) : null
}

export type RpcProvider = Pick<Provider, 'getCode' | 'getStorage' | 'call'>

export type GetRpcProvider = typeof getRpcProvider
