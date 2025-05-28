import { type ContractRunner } from "ethers";
import type { Dai, DaiInterface } from "../../../mainnet/tokens/Dai";
export declare class Dai__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "chainId_";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "Approval";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "guy";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "LogNote";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "sig";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }, {
            readonly name: "usr";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "arg1";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "arg2";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: true;
    }, {
        readonly name: "Transfer";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "DOMAIN_SEPARATOR";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "PERMIT_TYPEHASH";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "allowance";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "approve";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "balanceOf";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "burn";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "decimals";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "deny";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "mint";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "move";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "name";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "nonces";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "permit";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "holder";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "expiry";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "allowed";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "pull";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "push";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "usr";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "rely";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "symbol";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "totalSupply";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "transfer";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "dst";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "transferFrom";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "version";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "wards";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }];
    static createInterface(): DaiInterface;
    static connect(address: string, runner?: ContractRunner | null): Dai;
}
