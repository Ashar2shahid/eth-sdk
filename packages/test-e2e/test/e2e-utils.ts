import { execSync } from 'child_process'
import { rmSync } from 'fs-extra'
import { resolve } from 'path'

const THROWAWAY_MAINNET_ENDPOINT = 'https://rpc.mevblocker.io'

export const env = {
  E2E_RPC: process.env.E2E_RPC || THROWAWAY_MAINNET_ENDPOINT,
  SEPOLIA_RPC: 'https://eth-sepolia.api.onfinality.io/public',
}

export function rmrf(path: string) {
  try {
    rmSync(path, { recursive: true, force: true })
  } catch {}
}

export function generate(args: { path?: string; cwd?: string }) {
  execSync(`ts-node ${resolve(__dirname, '../../eth-sdk/src/cli.ts')}` + (args.path ? ` -p ${args.path}` : ''), {
    stdio: 'inherit',
    cwd: args.cwd,
  })
}
