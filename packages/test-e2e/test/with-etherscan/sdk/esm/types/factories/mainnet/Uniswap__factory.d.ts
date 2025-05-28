import { type ContractRunner } from "ethers";
import type { Uniswap, UniswapInterface } from "../../mainnet/Uniswap";
export declare class Uniswap__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "FeeAmountEnabled";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "fee";
            readonly type: "uint24";
            readonly indexed: true;
            readonly internalType: "uint24";
        }, {
            readonly name: "tickSpacing";
            readonly type: "int24";
            readonly indexed: true;
            readonly internalType: "int24";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "OwnerChanged";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "oldOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "PoolCreated";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "token0";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token1";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly indexed: true;
            readonly internalType: "uint24";
        }, {
            readonly name: "tickSpacing";
            readonly type: "int24";
            readonly indexed: false;
            readonly internalType: "int24";
        }, {
            readonly name: "pool";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "createPool";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "enableFeeAmount";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "tickSpacing";
            readonly type: "int24";
            readonly internalType: "int24";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "feeAmountTickSpacing";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int24";
            readonly internalType: "int24";
        }];
        readonly stateMutability: "view";
    }, {
        readonly name: "getPool";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly name: "owner";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly name: "parameters";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token1";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "tickSpacing";
            readonly type: "int24";
            readonly internalType: "int24";
        }];
        readonly stateMutability: "view";
    }, {
        readonly name: "setOwner";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): UniswapInterface;
    static connect(address: string, runner?: ContractRunner | null): Uniswap;
}
