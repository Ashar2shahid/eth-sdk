import { type ContractRunner } from "ethers";
import type { Mkr, MkrInterface } from "../../../mainnet/tokens/Mkr";
export declare class Mkr__factory {
    static readonly abi: readonly [{
        readonly name: "name";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "stop";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "approve";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "setOwner";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner_";
            readonly type: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "totalSupply";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "transferFrom";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "decimals";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "mint";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "burn";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "setName";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "name_";
            readonly type: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "balanceOf";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "stopped";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "setAuthority";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "authority_";
            readonly type: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "owner";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "symbol";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "burn";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "mint";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "transfer";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "push";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
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
        }, {
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "start";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "authority";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "approve";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "allowance";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly name: "guy";
            readonly type: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "pull";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "symbol_";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "Mint";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Burn";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly anonymous: false;
    }, {
        readonly name: "LogSetAuthority";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "authority";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly anonymous: false;
    }, {
        readonly name: "LogSetOwner";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }];
        readonly anonymous: false;
    }, {
        readonly name: "LogNote";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "sig";
            readonly type: "bytes4";
            readonly indexed: true;
        }, {
            readonly name: "guy";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "foo";
            readonly type: "bytes32";
            readonly indexed: true;
        }, {
            readonly name: "bar";
            readonly type: "bytes32";
            readonly indexed: true;
        }, {
            readonly name: "wad";
            readonly type: "uint256";
            readonly indexed: false;
        }, {
            readonly name: "fax";
            readonly type: "bytes";
            readonly indexed: false;
        }];
        readonly anonymous: true;
    }, {
        readonly name: "Transfer";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Approval";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly anonymous: false;
    }];
    static createInterface(): MkrInterface;
    static connect(address: string, runner?: ContractRunner | null): Mkr;
}
