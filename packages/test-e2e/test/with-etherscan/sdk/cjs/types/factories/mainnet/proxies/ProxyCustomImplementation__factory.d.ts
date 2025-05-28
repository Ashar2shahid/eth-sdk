import { type ContractRunner } from "ethers";
import type { ProxyCustomImplementation, ProxyCustomImplementationInterface } from "../../../mainnet/proxies/ProxyCustomImplementation";
export declare class ProxyCustomImplementation__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "ActionPaused";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "action";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "pauseState";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "ActionPaused";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "action";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "pauseState";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CompAccruedAdjusted";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "oldCompAccrued";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newCompAccrued";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CompBorrowSpeedUpdated";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "newSpeed";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CompGranted";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CompReceivableUpdated";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "oldCompReceivable";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newCompReceivable";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "CompSupplySpeedUpdated";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "newSpeed";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "ContributorCompSpeedUpdated";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "contributor";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newSpeed";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "DistributedBorrowerComp";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "compDelta";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "compBorrowIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "DistributedSupplierComp";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "supplier";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "compDelta";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "compSupplyIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "Failure";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "error";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "info";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "detail";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "MarketEntered";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "MarketExited";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "MarketListed";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract CToken";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "NewBorrowCap";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "newBorrowCap";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "NewBorrowCapGuardian";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "oldBorrowCapGuardian";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newBorrowCapGuardian";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "NewCloseFactor";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "oldCloseFactorMantissa";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newCloseFactorMantissa";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "NewCollateralFactor";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract CToken";
        }, {
            readonly name: "oldCollateralFactorMantissa";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newCollateralFactorMantissa";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "NewLiquidationIncentive";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "oldLiquidationIncentiveMantissa";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newLiquidationIncentiveMantissa";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "NewPauseGuardian";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "oldPauseGuardian";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newPauseGuardian";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "NewPriceOracle";
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "oldPriceOracle";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract PriceOracle";
        }, {
            readonly name: "newPriceOracle";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract PriceOracle";
        }];
        readonly anonymous: false;
    }, {
        readonly name: "_become";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "unitroller";
            readonly type: "address";
            readonly internalType: "contract Unitroller";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "_borrowGuardianPaused";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "_grantComp";
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
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "_mintGuardianPaused";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "_setBorrowCapGuardian";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newBorrowCapGuardian";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "_setBorrowPaused";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract CToken";
        }, {
            readonly name: "state";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "_setCloseFactor";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newCloseFactorMantissa";
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
        readonly name: "_setCollateralFactor";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract CToken";
        }, {
            readonly name: "newCollateralFactorMantissa";
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
        readonly name: "_setCompSpeeds";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokens";
            readonly type: "address[]";
            readonly internalType: "contract CToken[]";
        }, {
            readonly name: "supplySpeeds";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "borrowSpeeds";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "_setContributorCompSpeed";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "contributor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "compSpeed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "_setLiquidationIncentive";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newLiquidationIncentiveMantissa";
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
        readonly name: "_setMarketBorrowCaps";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokens";
            readonly type: "address[]";
            readonly internalType: "contract CToken[]";
        }, {
            readonly name: "newBorrowCaps";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "_setMintPaused";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract CToken";
        }, {
            readonly name: "state";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "_setPauseGuardian";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newPauseGuardian";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "_setPriceOracle";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "newOracle";
            readonly type: "address";
            readonly internalType: "contract PriceOracle";
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
        readonly name: "_setSeizePaused";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "state";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "_setTransferPaused";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "state";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "_supportMarket";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract CToken";
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
        readonly name: "accountAssets";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract CToken";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "admin";
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
        readonly name: "allMarkets";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract CToken";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "borrowAllowed";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrowAmount";
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
        readonly name: "borrowCapGuardian";
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
        readonly name: "borrowCaps";
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
        readonly name: "borrowGuardianPaused";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
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
        readonly name: "borrowVerify";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrowAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "checkMembership";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract CToken";
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
        readonly name: "claimComp";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "holder";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokens";
            readonly type: "address[]";
            readonly internalType: "contract CToken[]";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "claimComp";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "holders";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "cTokens";
            readonly type: "address[]";
            readonly internalType: "contract CToken[]";
        }, {
            readonly name: "borrowers";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "suppliers";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "claimComp";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "holder";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "closeFactorMantissa";
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
        readonly name: "compAccrued";
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
        readonly name: "compBorrowSpeeds";
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
        readonly name: "compBorrowState";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "index";
            readonly type: "uint224";
            readonly internalType: "uint224";
        }, {
            readonly name: "block";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "compBorrowerIndex";
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
        readonly name: "compContributorSpeeds";
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
        readonly name: "compInitialIndex";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint224";
            readonly internalType: "uint224";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "compRate";
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
        readonly name: "compReceivable";
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
        readonly name: "compSpeeds";
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
        readonly name: "compSupplierIndex";
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
        readonly name: "compSupplySpeeds";
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
        readonly name: "compSupplyState";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "index";
            readonly type: "uint224";
            readonly internalType: "uint224";
        }, {
            readonly name: "block";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "comptrollerImplementation";
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
        readonly name: "enterMarkets";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "exitMarket";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokenAddress";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "fixBadAccruals";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "affectedUsers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "getAccountLiquidity";
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
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "getAllMarkets";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "contract CToken[]";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "getAssetsIn";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "contract CToken[]";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "getBlockNumber";
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
        readonly name: "getCompAddress";
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
        readonly name: "getHypotheticalAccountLiquidity";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenModify";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "isComptroller";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "isDeprecated";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract CToken";
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
        readonly name: "lastContributorBlock";
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
        readonly name: "liquidateBorrowAllowed";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "repayAmount";
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
        readonly name: "liquidateBorrowVerify";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "actualRepayAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "seizeTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "liquidateCalculateSeizeTokens";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "actualRepayAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "liquidationIncentiveMantissa";
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
        readonly name: "markets";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "isListed";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "collateralFactorMantissa";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "isComped";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "maxAssets";
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
        readonly name: "mintAllowed";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "mintAmount";
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
        readonly name: "mintGuardianPaused";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
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
        readonly name: "mintVerify";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "actualMintAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mintTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "oracle";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract PriceOracle";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "pauseGuardian";
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
        readonly name: "pendingAdmin";
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
        readonly name: "pendingComptrollerImplementation";
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
        readonly name: "proposal65FixExecuted";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "redeemAllowed";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemTokens";
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
        readonly name: "redeemVerify";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "redeemTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "repayBorrowAllowed";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "payer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "repayAmount";
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
        readonly name: "repayBorrowVerify";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "payer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "actualRepayAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowerIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "seizeAllowed";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenBorrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "seizeTokens";
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
        readonly name: "seizeGuardianPaused";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "seizeVerify";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenBorrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "seizeTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "transferAllowed";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "src";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "transferTokens";
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
        readonly name: "transferGuardianPaused";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly payable: false;
        readonly constant: true;
        readonly stateMutability: "view";
    }, {
        readonly name: "transferVerify";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "src";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "transferTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }, {
        readonly name: "updateContributorRewards";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "contributor";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly payable: false;
        readonly constant: false;
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ProxyCustomImplementationInterface;
    static connect(address: string, runner?: ContractRunner | null): ProxyCustomImplementation;
}
