import { type ContractRunner } from "ethers";
import type { ProxyStandardStorageSlot, ProxyStandardStorageSlotInterface } from "../../../mainnet/proxies/ProxyStandardStorageSlot";
export declare class ProxyStandardStorageSlot__factory {
    static readonly abi: readonly [{
        readonly name: "Advance";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "block";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Bond";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "start";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "valueUnderlying";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Commit";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "candidate";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CouponApproval";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CouponExpiration";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "couponsExpired";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "lessRedeemable";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "lessDebt";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newBonded";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CouponPurchase";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "epoch";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "dollarAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "couponAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CouponRedemption";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "epoch";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "couponAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CouponTransfer";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "epoch";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Deposit";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Incentivization";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Proposal";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "candidate";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "start";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "period";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "SupplyDecrease";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "price";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newDebt";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "SupplyIncrease";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "price";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newRedeemable";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "lessDebt";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newBonded";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "SupplyNeutral";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Transfer";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Unbond";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "start";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "valueUnderlying";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Upgraded";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Vote";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "candidate";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "vote";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "enum Candidate.Vote";
        }, {
            readonly name: "bonded";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Withdraw";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "advance";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "allowance";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
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
        readonly name: "allowanceCoupons";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
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
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly name: "approveCoupons";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "approveFor";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
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
        readonly name: "balanceOf";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
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
        readonly name: "balanceOfBonded";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
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
        readonly name: "balanceOfCoupons";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "epoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "balanceOfStaged";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
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
        readonly name: "bond";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "bootstrappingAt";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "calculatePrice";
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
        readonly name: "calculateReward";
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
        readonly name: "commit";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "couponPremium";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "couponsExpiration";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "deposit";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "dollar";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IDollar";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "emergencyCommit";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "epoch";
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
        readonly name: "epochTime";
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
        readonly name: "expiringCoupons";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "expiringCouponsAtIndex";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "i";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "fluidUntil";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
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
        readonly name: "implementation";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "impl";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "initialize";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "isInitialized";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "isNominated";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "lockedUntil";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
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
        readonly name: "oracle";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IOracle";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "outstandingCoupons";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "periodFor";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
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
        readonly name: "pool";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "purchaseCoupons";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "dollarAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "recordedVote";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "candidate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum Candidate.Vote";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "redeemCoupons";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "couponEpoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "couponAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "rejectFor";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
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
        readonly name: "startFor";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
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
        readonly name: "statusOf";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum Account.Status";
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
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "totalBonded";
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
        readonly name: "totalBondedAt";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "epoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "totalCoupons";
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
        readonly name: "totalDebt";
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
        readonly name: "totalNet";
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
        readonly name: "totalRedeemable";
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
        readonly name: "totalStaged";
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
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly name: "transferCoupons";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "epoch";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "transferFrom";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly name: "unbond";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "unbondUnderlying";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "vote";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "vote";
            readonly type: "uint8";
            readonly internalType: "enum Candidate.Vote";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "votesFor";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "candidate";
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
        readonly name: "withdraw";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ProxyStandardStorageSlotInterface;
    static connect(address: string, runner?: ContractRunner | null): ProxyStandardStorageSlot;
}
