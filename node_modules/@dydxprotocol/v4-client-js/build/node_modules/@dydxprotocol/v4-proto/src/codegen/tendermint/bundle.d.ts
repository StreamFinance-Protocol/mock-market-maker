/// <reference types="long" />
import * as _258 from "./abci/types";
import * as _259 from "./crypto/keys";
import * as _260 from "./crypto/proof";
import * as _261 from "./libs/bits/types";
import * as _262 from "./p2p/types";
import * as _263 from "./types/block";
import * as _264 from "./types/evidence";
import * as _265 from "./types/params";
import * as _266 from "./types/types";
import * as _267 from "./types/validator";
import * as _268 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _258.CheckTxType;
        checkTxTypeToJSON(object: _258.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _258.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _258.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _258.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _258.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _258.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _258.ResponseProcessProposal_ProposalStatus): string;
        responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): _258.ResponseVerifyVoteExtension_VerifyStatus;
        responseVerifyVoteExtension_VerifyStatusToJSON(object: _258.ResponseVerifyVoteExtension_VerifyStatus): string;
        misbehaviorTypeFromJSON(object: any): _258.MisbehaviorType;
        misbehaviorTypeToJSON(object: _258.MisbehaviorType): string;
        CheckTxType: typeof _258.CheckTxType;
        CheckTxTypeSDKType: typeof _258.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _258.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _258.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _258.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _258.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _258.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _258.ResponseProcessProposal_ProposalStatus;
        ResponseVerifyVoteExtension_VerifyStatus: typeof _258.ResponseVerifyVoteExtension_VerifyStatus;
        ResponseVerifyVoteExtension_VerifyStatusSDKType: typeof _258.ResponseVerifyVoteExtension_VerifyStatus;
        MisbehaviorType: typeof _258.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _258.MisbehaviorType;
        Request: {
            encode(message: _258.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.Request;
            fromPartial(object: {
                echo?: {
                    message?: string | undefined;
                } | undefined;
                flush?: {} | undefined;
                info?: {
                    version?: string | undefined;
                    blockVersion?: string | number | import("long").Long | undefined;
                    p2pVersion?: string | number | import("long").Long | undefined;
                    abciVersion?: string | undefined;
                } | undefined;
                initChain?: {
                    time?: Date | undefined;
                    chainId?: string | undefined;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long | undefined;
                            maxGas?: string | number | import("long").Long | undefined;
                        } | undefined;
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            maxBytes?: string | number | import("long").Long | undefined;
                        } | undefined;
                        validator?: {
                            pubKeyTypes?: string[] | undefined;
                        } | undefined;
                        version?: {
                            app?: string | number | import("long").Long | undefined;
                        } | undefined;
                        abci?: {
                            voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        power?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    appStateBytes?: Uint8Array | undefined;
                    initialHeight?: string | number | import("long").Long | undefined;
                } | undefined;
                query?: {
                    data?: Uint8Array | undefined;
                    path?: string | undefined;
                    height?: string | number | import("long").Long | undefined;
                    prove?: boolean | undefined;
                } | undefined;
                checkTx?: {
                    tx?: Uint8Array | undefined;
                    type?: _258.CheckTxType | undefined;
                } | undefined;
                commit?: {} | undefined;
                listSnapshots?: {} | undefined;
                offerSnapshot?: {
                    snapshot?: {
                        height?: string | number | import("long").Long | undefined;
                        format?: number | undefined;
                        chunks?: number | undefined;
                        hash?: Uint8Array | undefined;
                        metadata?: Uint8Array | undefined;
                    } | undefined;
                    appHash?: Uint8Array | undefined;
                } | undefined;
                loadSnapshotChunk?: {
                    height?: string | number | import("long").Long | undefined;
                    format?: number | undefined;
                    chunk?: number | undefined;
                } | undefined;
                applySnapshotChunk?: {
                    index?: number | undefined;
                    chunk?: Uint8Array | undefined;
                    sender?: string | undefined;
                } | undefined;
                prepareProposal?: {
                    maxTxBytes?: string | number | import("long").Long | undefined;
                    txs?: Uint8Array[] | undefined;
                    localLastCommit?: {
                        round?: number | undefined;
                        votes?: {
                            validator?: {
                                address?: Uint8Array | undefined;
                                power?: string | number | import("long").Long | undefined;
                            } | undefined;
                            voteExtension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                            blockIdFlag?: _267.BlockIDFlag | undefined;
                        }[] | undefined;
                    } | undefined;
                    misbehavior?: {
                        type?: _258.MisbehaviorType | undefined;
                        validator?: {
                            address?: Uint8Array | undefined;
                            power?: string | number | import("long").Long | undefined;
                        } | undefined;
                        height?: string | number | import("long").Long | undefined;
                        time?: Date | undefined;
                        totalVotingPower?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                processProposal?: {
                    txs?: Uint8Array[] | undefined;
                    proposedLastCommit?: {
                        round?: number | undefined;
                        votes?: {
                            validator?: {
                                address?: Uint8Array | undefined;
                                power?: string | number | import("long").Long | undefined;
                            } | undefined;
                            blockIdFlag?: _267.BlockIDFlag | undefined;
                        }[] | undefined;
                    } | undefined;
                    misbehavior?: {
                        type?: _258.MisbehaviorType | undefined;
                        validator?: {
                            address?: Uint8Array | undefined;
                            power?: string | number | import("long").Long | undefined;
                        } | undefined;
                        height?: string | number | import("long").Long | undefined;
                        time?: Date | undefined;
                        totalVotingPower?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    hash?: Uint8Array | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                extendVote?: {
                    hash?: Uint8Array | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    txs?: Uint8Array[] | undefined;
                    proposedLastCommit?: {
                        round?: number | undefined;
                        votes?: {
                            validator?: {
                                address?: Uint8Array | undefined;
                                power?: string | number | import("long").Long | undefined;
                            } | undefined;
                            blockIdFlag?: _267.BlockIDFlag | undefined;
                        }[] | undefined;
                    } | undefined;
                    misbehavior?: {
                        type?: _258.MisbehaviorType | undefined;
                        validator?: {
                            address?: Uint8Array | undefined;
                            power?: string | number | import("long").Long | undefined;
                        } | undefined;
                        height?: string | number | import("long").Long | undefined;
                        time?: Date | undefined;
                        totalVotingPower?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                verifyVoteExtension?: {
                    hash?: Uint8Array | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    height?: string | number | import("long").Long | undefined;
                    voteExtension?: Uint8Array | undefined;
                } | undefined;
                finalizeBlock?: {
                    txs?: Uint8Array[] | undefined;
                    decidedLastCommit?: {
                        round?: number | undefined;
                        votes?: {
                            validator?: {
                                address?: Uint8Array | undefined;
                                power?: string | number | import("long").Long | undefined;
                            } | undefined;
                            blockIdFlag?: _267.BlockIDFlag | undefined;
                        }[] | undefined;
                    } | undefined;
                    misbehavior?: {
                        type?: _258.MisbehaviorType | undefined;
                        validator?: {
                            address?: Uint8Array | undefined;
                            power?: string | number | import("long").Long | undefined;
                        } | undefined;
                        height?: string | number | import("long").Long | undefined;
                        time?: Date | undefined;
                        totalVotingPower?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    hash?: Uint8Array | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
            }): _258.Request;
        };
        RequestEcho: {
            encode(message: _258.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestEcho;
            fromPartial(object: {
                message?: string | undefined;
            }): _258.RequestEcho;
        };
        RequestFlush: {
            encode(_: _258.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestFlush;
            fromPartial(_: {}): _258.RequestFlush;
        };
        RequestInfo: {
            encode(message: _258.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestInfo;
            fromPartial(object: {
                version?: string | undefined;
                blockVersion?: string | number | import("long").Long | undefined;
                p2pVersion?: string | number | import("long").Long | undefined;
                abciVersion?: string | undefined;
            }): _258.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _258.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestInitChain;
            fromPartial(object: {
                time?: Date | undefined;
                chainId?: string | undefined;
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long | undefined;
                        maxGas?: string | number | import("long").Long | undefined;
                    } | undefined;
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        maxBytes?: string | number | import("long").Long | undefined;
                    } | undefined;
                    validator?: {
                        pubKeyTypes?: string[] | undefined;
                    } | undefined;
                    version?: {
                        app?: string | number | import("long").Long | undefined;
                    } | undefined;
                    abci?: {
                        voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                    } | undefined;
                } | undefined;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    power?: string | number | import("long").Long | undefined;
                }[] | undefined;
                appStateBytes?: Uint8Array | undefined;
                initialHeight?: string | number | import("long").Long | undefined;
            }): _258.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _258.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array | undefined;
                path?: string | undefined;
                height?: string | number | import("long").Long | undefined;
                prove?: boolean | undefined;
            }): _258.RequestQuery;
        };
        RequestCheckTx: {
            encode(message: _258.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array | undefined;
                type?: _258.CheckTxType | undefined;
            }): _258.RequestCheckTx;
        };
        RequestCommit: {
            encode(_: _258.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestCommit;
            fromPartial(_: {}): _258.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _258.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestListSnapshots;
            fromPartial(_: {}): _258.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _258.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").Long | undefined;
                    format?: number | undefined;
                    chunks?: number | undefined;
                    hash?: Uint8Array | undefined;
                    metadata?: Uint8Array | undefined;
                } | undefined;
                appHash?: Uint8Array | undefined;
            }): _258.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _258.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long").Long | undefined;
                format?: number | undefined;
                chunk?: number | undefined;
            }): _258.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _258.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number | undefined;
                chunk?: Uint8Array | undefined;
                sender?: string | undefined;
            }): _258.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _258.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestPrepareProposal;
            fromPartial(object: {
                maxTxBytes?: string | number | import("long").Long | undefined;
                txs?: Uint8Array[] | undefined;
                localLastCommit?: {
                    round?: number | undefined;
                    votes?: {
                        validator?: {
                            address?: Uint8Array | undefined;
                            power?: string | number | import("long").Long | undefined;
                        } | undefined;
                        voteExtension?: Uint8Array | undefined;
                        extensionSignature?: Uint8Array | undefined;
                        blockIdFlag?: _267.BlockIDFlag | undefined;
                    }[] | undefined;
                } | undefined;
                misbehavior?: {
                    type?: _258.MisbehaviorType | undefined;
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | number | import("long").Long | undefined;
                    } | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                }[] | undefined;
                height?: string | number | import("long").Long | undefined;
                time?: Date | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            }): _258.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _258.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestProcessProposal;
            fromPartial(object: {
                txs?: Uint8Array[] | undefined;
                proposedLastCommit?: {
                    round?: number | undefined;
                    votes?: {
                        validator?: {
                            address?: Uint8Array | undefined;
                            power?: string | number | import("long").Long | undefined;
                        } | undefined;
                        blockIdFlag?: _267.BlockIDFlag | undefined;
                    }[] | undefined;
                } | undefined;
                misbehavior?: {
                    type?: _258.MisbehaviorType | undefined;
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | number | import("long").Long | undefined;
                    } | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                }[] | undefined;
                hash?: Uint8Array | undefined;
                height?: string | number | import("long").Long | undefined;
                time?: Date | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            }): _258.RequestProcessProposal;
        };
        RequestExtendVote: {
            encode(message: _258.RequestExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestExtendVote;
            fromPartial(object: {
                hash?: Uint8Array | undefined;
                height?: string | number | import("long").Long | undefined;
                time?: Date | undefined;
                txs?: Uint8Array[] | undefined;
                proposedLastCommit?: {
                    round?: number | undefined;
                    votes?: {
                        validator?: {
                            address?: Uint8Array | undefined;
                            power?: string | number | import("long").Long | undefined;
                        } | undefined;
                        blockIdFlag?: _267.BlockIDFlag | undefined;
                    }[] | undefined;
                } | undefined;
                misbehavior?: {
                    type?: _258.MisbehaviorType | undefined;
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | number | import("long").Long | undefined;
                    } | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                }[] | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            }): _258.RequestExtendVote;
        };
        RequestVerifyVoteExtension: {
            encode(message: _258.RequestVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestVerifyVoteExtension;
            fromPartial(object: {
                hash?: Uint8Array | undefined;
                validatorAddress?: Uint8Array | undefined;
                height?: string | number | import("long").Long | undefined;
                voteExtension?: Uint8Array | undefined;
            }): _258.RequestVerifyVoteExtension;
        };
        RequestFinalizeBlock: {
            encode(message: _258.RequestFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.RequestFinalizeBlock;
            fromPartial(object: {
                txs?: Uint8Array[] | undefined;
                decidedLastCommit?: {
                    round?: number | undefined;
                    votes?: {
                        validator?: {
                            address?: Uint8Array | undefined;
                            power?: string | number | import("long").Long | undefined;
                        } | undefined;
                        blockIdFlag?: _267.BlockIDFlag | undefined;
                    }[] | undefined;
                } | undefined;
                misbehavior?: {
                    type?: _258.MisbehaviorType | undefined;
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | number | import("long").Long | undefined;
                    } | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                }[] | undefined;
                hash?: Uint8Array | undefined;
                height?: string | number | import("long").Long | undefined;
                time?: Date | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            }): _258.RequestFinalizeBlock;
        };
        Response: {
            encode(message: _258.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.Response;
            fromPartial(object: {
                exception?: {
                    error?: string | undefined;
                } | undefined;
                echo?: {
                    message?: string | undefined;
                } | undefined;
                flush?: {} | undefined;
                info?: {
                    data?: string | undefined;
                    version?: string | undefined;
                    appVersion?: string | number | import("long").Long | undefined;
                    lastBlockHeight?: string | number | import("long").Long | undefined;
                    lastBlockAppHash?: Uint8Array | undefined;
                } | undefined;
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long | undefined;
                            maxGas?: string | number | import("long").Long | undefined;
                        } | undefined;
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            maxBytes?: string | number | import("long").Long | undefined;
                        } | undefined;
                        validator?: {
                            pubKeyTypes?: string[] | undefined;
                        } | undefined;
                        version?: {
                            app?: string | number | import("long").Long | undefined;
                        } | undefined;
                        abci?: {
                            voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        power?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    appHash?: Uint8Array | undefined;
                } | undefined;
                query?: {
                    code?: number | undefined;
                    log?: string | undefined;
                    info?: string | undefined;
                    index?: string | number | import("long").Long | undefined;
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    proofOps?: {
                        ops?: {
                            type?: string | undefined;
                            key?: Uint8Array | undefined;
                            data?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    height?: string | number | import("long").Long | undefined;
                    codespace?: string | undefined;
                } | undefined;
                checkTx?: {
                    code?: number | undefined;
                    data?: Uint8Array | undefined;
                    log?: string | undefined;
                    info?: string | undefined;
                    gasWanted?: string | number | import("long").Long | undefined;
                    gasUsed?: string | number | import("long").Long | undefined;
                    events?: {
                        type?: string | undefined;
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                            index?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    codespace?: string | undefined;
                } | undefined;
                commit?: {
                    retainHeight?: string | number | import("long").Long | undefined;
                } | undefined;
                listSnapshots?: {
                    snapshots?: {
                        height?: string | number | import("long").Long | undefined;
                        format?: number | undefined;
                        chunks?: number | undefined;
                        hash?: Uint8Array | undefined;
                        metadata?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                offerSnapshot?: {
                    result?: _258.ResponseOfferSnapshot_Result | undefined;
                } | undefined;
                loadSnapshotChunk?: {
                    chunk?: Uint8Array | undefined;
                } | undefined;
                applySnapshotChunk?: {
                    result?: _258.ResponseApplySnapshotChunk_Result | undefined;
                    refetchChunks?: number[] | undefined;
                    rejectSenders?: string[] | undefined;
                } | undefined;
                prepareProposal?: {
                    txs?: Uint8Array[] | undefined;
                } | undefined;
                processProposal?: {
                    status?: _258.ResponseProcessProposal_ProposalStatus | undefined;
                } | undefined;
                extendVote?: {
                    voteExtension?: Uint8Array | undefined;
                } | undefined;
                verifyVoteExtension?: {
                    status?: _258.ResponseVerifyVoteExtension_VerifyStatus | undefined;
                } | undefined;
                finalizeBlock?: {
                    events?: {
                        type?: string | undefined;
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                            index?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    txResults?: {
                        code?: number | undefined;
                        data?: Uint8Array | undefined;
                        log?: string | undefined;
                        info?: string | undefined;
                        gasWanted?: string | number | import("long").Long | undefined;
                        gasUsed?: string | number | import("long").Long | undefined;
                        events?: {
                            type?: string | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                                index?: boolean | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        codespace?: string | undefined;
                    }[] | undefined;
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        power?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long | undefined;
                            maxGas?: string | number | import("long").Long | undefined;
                        } | undefined;
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            maxBytes?: string | number | import("long").Long | undefined;
                        } | undefined;
                        validator?: {
                            pubKeyTypes?: string[] | undefined;
                        } | undefined;
                        version?: {
                            app?: string | number | import("long").Long | undefined;
                        } | undefined;
                        abci?: {
                            voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    appHash?: Uint8Array | undefined;
                } | undefined;
            }): _258.Response;
        };
        ResponseException: {
            encode(message: _258.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseException;
            fromPartial(object: {
                error?: string | undefined;
            }): _258.ResponseException;
        };
        ResponseEcho: {
            encode(message: _258.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseEcho;
            fromPartial(object: {
                message?: string | undefined;
            }): _258.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _258.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseFlush;
            fromPartial(_: {}): _258.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _258.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseInfo;
            fromPartial(object: {
                data?: string | undefined;
                version?: string | undefined;
                appVersion?: string | number | import("long").Long | undefined;
                lastBlockHeight?: string | number | import("long").Long | undefined;
                lastBlockAppHash?: Uint8Array | undefined;
            }): _258.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _258.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseInitChain;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long | undefined;
                        maxGas?: string | number | import("long").Long | undefined;
                    } | undefined;
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        maxBytes?: string | number | import("long").Long | undefined;
                    } | undefined;
                    validator?: {
                        pubKeyTypes?: string[] | undefined;
                    } | undefined;
                    version?: {
                        app?: string | number | import("long").Long | undefined;
                    } | undefined;
                    abci?: {
                        voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                    } | undefined;
                } | undefined;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    power?: string | number | import("long").Long | undefined;
                }[] | undefined;
                appHash?: Uint8Array | undefined;
            }): _258.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _258.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseQuery;
            fromPartial(object: {
                code?: number | undefined;
                log?: string | undefined;
                info?: string | undefined;
                index?: string | number | import("long").Long | undefined;
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                proofOps?: {
                    ops?: {
                        type?: string | undefined;
                        key?: Uint8Array | undefined;
                        data?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                height?: string | number | import("long").Long | undefined;
                codespace?: string | undefined;
            }): _258.ResponseQuery;
        };
        ResponseCheckTx: {
            encode(message: _258.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseCheckTx;
            fromPartial(object: {
                code?: number | undefined;
                data?: Uint8Array | undefined;
                log?: string | undefined;
                info?: string | undefined;
                gasWanted?: string | number | import("long").Long | undefined;
                gasUsed?: string | number | import("long").Long | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                codespace?: string | undefined;
            }): _258.ResponseCheckTx;
        };
        ResponseCommit: {
            encode(message: _258.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseCommit;
            fromPartial(object: {
                retainHeight?: string | number | import("long").Long | undefined;
            }): _258.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _258.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").Long | undefined;
                    format?: number | undefined;
                    chunks?: number | undefined;
                    hash?: Uint8Array | undefined;
                    metadata?: Uint8Array | undefined;
                }[] | undefined;
            }): _258.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _258.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _258.ResponseOfferSnapshot_Result | undefined;
            }): _258.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _258.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array | undefined;
            }): _258.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _258.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _258.ResponseApplySnapshotChunk_Result | undefined;
                refetchChunks?: number[] | undefined;
                rejectSenders?: string[] | undefined;
            }): _258.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _258.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponsePrepareProposal;
            fromPartial(object: {
                txs?: Uint8Array[] | undefined;
            }): _258.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _258.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseProcessProposal;
            fromPartial(object: {
                status?: _258.ResponseProcessProposal_ProposalStatus | undefined;
            }): _258.ResponseProcessProposal;
        };
        ResponseExtendVote: {
            encode(message: _258.ResponseExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseExtendVote;
            fromPartial(object: {
                voteExtension?: Uint8Array | undefined;
            }): _258.ResponseExtendVote;
        };
        ResponseVerifyVoteExtension: {
            encode(message: _258.ResponseVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseVerifyVoteExtension;
            fromPartial(object: {
                status?: _258.ResponseVerifyVoteExtension_VerifyStatus | undefined;
            }): _258.ResponseVerifyVoteExtension;
        };
        ResponseFinalizeBlock: {
            encode(message: _258.ResponseFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ResponseFinalizeBlock;
            fromPartial(object: {
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                txResults?: {
                    code?: number | undefined;
                    data?: Uint8Array | undefined;
                    log?: string | undefined;
                    info?: string | undefined;
                    gasWanted?: string | number | import("long").Long | undefined;
                    gasUsed?: string | number | import("long").Long | undefined;
                    events?: {
                        type?: string | undefined;
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                            index?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    codespace?: string | undefined;
                }[] | undefined;
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    power?: string | number | import("long").Long | undefined;
                }[] | undefined;
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long | undefined;
                        maxGas?: string | number | import("long").Long | undefined;
                    } | undefined;
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        maxBytes?: string | number | import("long").Long | undefined;
                    } | undefined;
                    validator?: {
                        pubKeyTypes?: string[] | undefined;
                    } | undefined;
                    version?: {
                        app?: string | number | import("long").Long | undefined;
                    } | undefined;
                    abci?: {
                        voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                    } | undefined;
                } | undefined;
                appHash?: Uint8Array | undefined;
            }): _258.ResponseFinalizeBlock;
        };
        CommitInfo: {
            encode(message: _258.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.CommitInfo;
            fromPartial(object: {
                round?: number | undefined;
                votes?: {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | number | import("long").Long | undefined;
                    } | undefined;
                    blockIdFlag?: _267.BlockIDFlag | undefined;
                }[] | undefined;
            }): _258.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _258.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ExtendedCommitInfo;
            fromPartial(object: {
                round?: number | undefined;
                votes?: {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | number | import("long").Long | undefined;
                    } | undefined;
                    voteExtension?: Uint8Array | undefined;
                    extensionSignature?: Uint8Array | undefined;
                    blockIdFlag?: _267.BlockIDFlag | undefined;
                }[] | undefined;
            }): _258.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _258.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.Event;
            fromPartial(object: {
                type?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }): _258.Event;
        };
        EventAttribute: {
            encode(message: _258.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.EventAttribute;
            fromPartial(object: {
                key?: string | undefined;
                value?: string | undefined;
                index?: boolean | undefined;
            }): _258.EventAttribute;
        };
        ExecTxResult: {
            encode(message: _258.ExecTxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ExecTxResult;
            fromPartial(object: {
                code?: number | undefined;
                data?: Uint8Array | undefined;
                log?: string | undefined;
                info?: string | undefined;
                gasWanted?: string | number | import("long").Long | undefined;
                gasUsed?: string | number | import("long").Long | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                        index?: boolean | undefined;
                    }[] | undefined;
                }[] | undefined;
                codespace?: string | undefined;
            }): _258.ExecTxResult;
        };
        TxResult: {
            encode(message: _258.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.TxResult;
            fromPartial(object: {
                height?: string | number | import("long").Long | undefined;
                index?: number | undefined;
                tx?: Uint8Array | undefined;
                result?: {
                    code?: number | undefined;
                    data?: Uint8Array | undefined;
                    log?: string | undefined;
                    info?: string | undefined;
                    gasWanted?: string | number | import("long").Long | undefined;
                    gasUsed?: string | number | import("long").Long | undefined;
                    events?: {
                        type?: string | undefined;
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                            index?: boolean | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    codespace?: string | undefined;
                } | undefined;
            }): _258.TxResult;
        };
        Validator: {
            encode(message: _258.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.Validator;
            fromPartial(object: {
                address?: Uint8Array | undefined;
                power?: string | number | import("long").Long | undefined;
            }): _258.Validator;
        };
        ValidatorUpdate: {
            encode(message: _258.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | number | import("long").Long | undefined;
            }): _258.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _258.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | number | import("long").Long | undefined;
                } | undefined;
                blockIdFlag?: _267.BlockIDFlag | undefined;
            }): _258.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _258.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.ExtendedVoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | number | import("long").Long | undefined;
                } | undefined;
                voteExtension?: Uint8Array | undefined;
                extensionSignature?: Uint8Array | undefined;
                blockIdFlag?: _267.BlockIDFlag | undefined;
            }): _258.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _258.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.Misbehavior;
            fromPartial(object: {
                type?: _258.MisbehaviorType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | number | import("long").Long | undefined;
                } | undefined;
                height?: string | number | import("long").Long | undefined;
                time?: Date | undefined;
                totalVotingPower?: string | number | import("long").Long | undefined;
            }): _258.Misbehavior;
        };
        Snapshot: {
            encode(message: _258.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long").Long | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }): _258.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _260.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _260.Proof;
            fromPartial(object: {
                total?: string | number | import("long").Long | undefined;
                index?: string | number | import("long").Long | undefined;
                leafHash?: Uint8Array | undefined;
                aunts?: Uint8Array[] | undefined;
            }): _260.Proof;
        };
        ValueOp: {
            encode(message: _260.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _260.ValueOp;
            fromPartial(object: {
                key?: Uint8Array | undefined;
                proof?: {
                    total?: string | number | import("long").Long | undefined;
                    index?: string | number | import("long").Long | undefined;
                    leafHash?: Uint8Array | undefined;
                    aunts?: Uint8Array[] | undefined;
                } | undefined;
            }): _260.ValueOp;
        };
        DominoOp: {
            encode(message: _260.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _260.DominoOp;
            fromPartial(object: {
                key?: string | undefined;
                input?: string | undefined;
                output?: string | undefined;
            }): _260.DominoOp;
        };
        ProofOp: {
            encode(message: _260.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _260.ProofOp;
            fromPartial(object: {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }): _260.ProofOp;
        };
        ProofOps: {
            encode(message: _260.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _260.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] | undefined;
            }): _260.ProofOps;
        };
        PublicKey: {
            encode(message: _259.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _259.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            }): _259.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _261.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _261.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long").Long | undefined;
                    elems?: (string | number | import("long").Long)[] | undefined;
                }): _261.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _262.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _262.NetAddress;
            fromPartial(object: {
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            }): _262.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _262.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _262.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long").Long | undefined;
                block?: string | number | import("long").Long | undefined;
                app?: string | number | import("long").Long | undefined;
            }): _262.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _262.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _262.DefaultNodeInfo;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: string | number | import("long").Long | undefined;
                    block?: string | number | import("long").Long | undefined;
                    app?: string | number | import("long").Long | undefined;
                } | undefined;
                defaultNodeId?: string | undefined;
                listenAddr?: string | undefined;
                network?: string | undefined;
                version?: string | undefined;
                channels?: Uint8Array | undefined;
                moniker?: string | undefined;
                other?: {
                    txIndex?: string | undefined;
                    rpcAddress?: string | undefined;
                } | undefined;
            }): _262.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _262.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _262.DefaultNodeInfoOther;
            fromPartial(object: {
                txIndex?: string | undefined;
                rpcAddress?: string | undefined;
            }): _262.DefaultNodeInfoOther;
        };
    };
    const types: {
        blockIDFlagFromJSON(object: any): _267.BlockIDFlag;
        blockIDFlagToJSON(object: _267.BlockIDFlag): string;
        BlockIDFlag: typeof _267.BlockIDFlag;
        BlockIDFlagSDKType: typeof _267.BlockIDFlag;
        ValidatorSet: {
            encode(message: _267.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _267.ValidatorSet;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | import("long").Long | undefined;
                    proposerPriority?: string | number | import("long").Long | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | import("long").Long | undefined;
                    proposerPriority?: string | number | import("long").Long | undefined;
                } | undefined;
                totalVotingPower?: string | number | import("long").Long | undefined;
            }): _267.ValidatorSet;
        };
        Validator: {
            encode(message: _267.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _267.Validator;
            fromPartial(object: {
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | import("long").Long | undefined;
                proposerPriority?: string | number | import("long").Long | undefined;
            }): _267.Validator;
        };
        SimpleValidator: {
            encode(message: _267.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _267.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | import("long").Long | undefined;
            }): _267.SimpleValidator;
        };
        signedMsgTypeFromJSON(object: any): _266.SignedMsgType;
        signedMsgTypeToJSON(object: _266.SignedMsgType): string;
        SignedMsgType: typeof _266.SignedMsgType;
        SignedMsgTypeSDKType: typeof _266.SignedMsgType;
        PartSetHeader: {
            encode(message: _266.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.PartSetHeader;
            fromPartial(object: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            }): _266.PartSetHeader;
        };
        Part: {
            encode(message: _266.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.Part;
            fromPartial(object: {
                index?: number | undefined;
                bytes?: Uint8Array | undefined;
                proof?: {
                    total?: string | number | import("long").Long | undefined;
                    index?: string | number | import("long").Long | undefined;
                    leafHash?: Uint8Array | undefined;
                    aunts?: Uint8Array[] | undefined;
                } | undefined;
            }): _266.Part;
        };
        BlockID: {
            encode(message: _266.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.BlockID;
            fromPartial(object: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            }): _266.BlockID;
        };
        Header: {
            encode(message: _266.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.Header;
            fromPartial(object: {
                version?: {
                    block?: string | number | import("long").Long | undefined;
                    app?: string | number | import("long").Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | import("long").Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            }): _266.Header;
        };
        Data: {
            encode(message: _266.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.Data;
            fromPartial(object: {
                txs?: Uint8Array[] | undefined;
            }): _266.Data;
        };
        Vote: {
            encode(message: _266.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.Vote;
            fromPartial(object: {
                type?: _266.SignedMsgType | undefined;
                height?: string | number | import("long").Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
                extension?: Uint8Array | undefined;
                extensionSignature?: Uint8Array | undefined;
            }): _266.Vote;
        };
        Commit: {
            encode(message: _266.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.Commit;
            fromPartial(object: {
                height?: string | number | import("long").Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: _267.BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            }): _266.Commit;
        };
        CommitSig: {
            encode(message: _266.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _267.BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            }): _266.CommitSig;
        };
        ExtendedCommit: {
            encode(message: _266.ExtendedCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.ExtendedCommit;
            fromPartial(object: {
                height?: string | number | import("long").Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                extendedSignatures?: {
                    blockIdFlag?: _267.BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                    extension?: Uint8Array | undefined;
                    extensionSignature?: Uint8Array | undefined;
                }[] | undefined;
            }): _266.ExtendedCommit;
        };
        ExtendedCommitSig: {
            encode(message: _266.ExtendedCommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.ExtendedCommitSig;
            fromPartial(object: {
                blockIdFlag?: _267.BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
                extension?: Uint8Array | undefined;
                extensionSignature?: Uint8Array | undefined;
            }): _266.ExtendedCommitSig;
        };
        Proposal: {
            encode(message: _266.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.Proposal;
            fromPartial(object: {
                type?: _266.SignedMsgType | undefined;
                height?: string | number | import("long").Long | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            }): _266.Proposal;
        };
        SignedHeader: {
            encode(message: _266.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.SignedHeader;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").Long | undefined;
                        app?: string | number | import("long").Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    lastBlockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                commit?: {
                    height?: string | number | import("long").Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: _267.BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: Date | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            }): _266.SignedHeader;
        };
        LightBlock: {
            encode(message: _266.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.LightBlock;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").Long | undefined;
                            app?: string | number | import("long").Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | import("long").Long | undefined;
                        time?: Date | undefined;
                        lastBlockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } | undefined;
                    commit?: {
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: _267.BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: Date | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                } | undefined;
            }): _266.LightBlock;
        };
        BlockMeta: {
            encode(message: _266.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                blockSize?: string | number | import("long").Long | undefined;
                header?: {
                    version?: {
                        block?: string | number | import("long").Long | undefined;
                        app?: string | number | import("long").Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    lastBlockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                numTxs?: string | number | import("long").Long | undefined;
            }): _266.BlockMeta;
        };
        TxProof: {
            encode(message: _266.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
                proof?: {
                    total?: string | number | import("long").Long | undefined;
                    index?: string | number | import("long").Long | undefined;
                    leafHash?: Uint8Array | undefined;
                    aunts?: Uint8Array[] | undefined;
                } | undefined;
            }): _266.TxProof;
        };
        ConsensusParams: {
            encode(message: _265.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").Long | undefined;
                    maxGas?: string | number | import("long").Long | undefined;
                } | undefined;
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    maxBytes?: string | number | import("long").Long | undefined;
                } | undefined;
                validator?: {
                    pubKeyTypes?: string[] | undefined;
                } | undefined;
                version?: {
                    app?: string | number | import("long").Long | undefined;
                } | undefined;
                abci?: {
                    voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
                } | undefined;
            }): _265.ConsensusParams;
        };
        BlockParams: {
            encode(message: _265.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long | undefined;
                maxGas?: string | number | import("long").Long | undefined;
            }): _265.BlockParams;
        };
        EvidenceParams: {
            encode(message: _265.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long").Long | undefined;
                maxAgeDuration?: {
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                maxBytes?: string | number | import("long").Long | undefined;
            }): _265.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _265.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[] | undefined;
            }): _265.ValidatorParams;
        };
        VersionParams: {
            encode(message: _265.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.VersionParams;
            fromPartial(object: {
                app?: string | number | import("long").Long | undefined;
            }): _265.VersionParams;
        };
        HashedParams: {
            encode(message: _265.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long").Long | undefined;
                blockMaxGas?: string | number | import("long").Long | undefined;
            }): _265.HashedParams;
        };
        ABCIParams: {
            encode(message: _265.ABCIParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.ABCIParams;
            fromPartial(object: {
                voteExtensionsEnableHeight?: string | number | import("long").Long | undefined;
            }): _265.ABCIParams;
        };
        Evidence: {
            encode(message: _264.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _264.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _266.SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: Date | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                        extension?: Uint8Array | undefined;
                        extensionSignature?: Uint8Array | undefined;
                    } | undefined;
                    voteB?: {
                        type?: _266.SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: Date | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                        extension?: Uint8Array | undefined;
                        extensionSignature?: Uint8Array | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    validatorPower?: string | number | import("long").Long | undefined;
                    timestamp?: Date | undefined;
                } | undefined;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: Date | undefined;
                                lastBlockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: Uint8Array | undefined;
                            } | undefined;
                            commit?: {
                                height?: string | number | import("long").Long | undefined;
                                round?: number | undefined;
                                blockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                signatures?: {
                                    blockIdFlag?: _267.BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] | undefined;
                            } | undefined;
                        } | undefined;
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    commonHeight?: string | number | import("long").Long | undefined;
                    byzantineValidators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    timestamp?: Date | undefined;
                } | undefined;
            }): _264.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _264.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _264.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _266.SignedMsgType | undefined;
                    height?: string | number | import("long").Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: Date | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                    extension?: Uint8Array | undefined;
                    extensionSignature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: _266.SignedMsgType | undefined;
                    height?: string | number | import("long").Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: Date | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                    extension?: Uint8Array | undefined;
                    extensionSignature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | import("long").Long | undefined;
                validatorPower?: string | number | import("long").Long | undefined;
                timestamp?: Date | undefined;
            }): _264.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _264.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _264.LightClientAttackEvidence;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").Long | undefined;
                                app?: string | number | import("long").Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | import("long").Long | undefined;
                            time?: Date | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        commit?: {
                            height?: string | number | import("long").Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: _267.BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: Date | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | import("long").Long | undefined;
                            proposerPriority?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | import("long").Long | undefined;
                            proposerPriority?: string | number | import("long").Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | import("long").Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | import("long").Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | import("long").Long | undefined;
                    proposerPriority?: string | number | import("long").Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | import("long").Long | undefined;
                timestamp?: Date | undefined;
            }): _264.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _264.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _264.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _266.SignedMsgType | undefined;
                            height?: string | number | import("long").Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: _266.SignedMsgType | undefined;
                            height?: string | number | import("long").Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                            extension?: Uint8Array | undefined;
                            extensionSignature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | import("long").Long | undefined;
                        validatorPower?: string | number | import("long").Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").Long | undefined;
                                        app?: string | number | import("long").Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | import("long").Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | import("long").Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: _267.BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | import("long").Long | undefined;
                                    proposerPriority?: string | number | import("long").Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | import("long").Long | undefined;
                                    proposerPriority?: string | number | import("long").Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | import("long").Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | import("long").Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | import("long").Long | undefined;
                            proposerPriority?: string | number | import("long").Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | import("long").Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            }): _264.EvidenceList;
        };
        Block: {
            encode(message: _263.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _263.Block;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").Long | undefined;
                        app?: string | number | import("long").Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | import("long").Long | undefined;
                    time?: Date | undefined;
                    lastBlockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                data?: {
                    txs?: Uint8Array[] | undefined;
                } | undefined;
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _266.SignedMsgType | undefined;
                                height?: string | number | import("long").Long | undefined;
                                round?: number | undefined;
                                blockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                timestamp?: Date | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                validatorIndex?: number | undefined;
                                signature?: Uint8Array | undefined;
                                extension?: Uint8Array | undefined;
                                extensionSignature?: Uint8Array | undefined;
                            } | undefined;
                            voteB?: {
                                type?: _266.SignedMsgType | undefined;
                                height?: string | number | import("long").Long | undefined;
                                round?: number | undefined;
                                blockId?: {
                                    hash?: Uint8Array | undefined;
                                    partSetHeader?: {
                                        total?: number | undefined;
                                        hash?: Uint8Array | undefined;
                                    } | undefined;
                                } | undefined;
                                timestamp?: Date | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                validatorIndex?: number | undefined;
                                signature?: Uint8Array | undefined;
                                extension?: Uint8Array | undefined;
                                extensionSignature?: Uint8Array | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                            validatorPower?: string | number | import("long").Long | undefined;
                            timestamp?: Date | undefined;
                        } | undefined;
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string | number | import("long").Long | undefined;
                                            app?: string | number | import("long").Long | undefined;
                                        } | undefined;
                                        chainId?: string | undefined;
                                        height?: string | number | import("long").Long | undefined;
                                        time?: Date | undefined;
                                        lastBlockId?: {
                                            hash?: Uint8Array | undefined;
                                            partSetHeader?: {
                                                total?: number | undefined;
                                                hash?: Uint8Array | undefined;
                                            } | undefined;
                                        } | undefined;
                                        lastCommitHash?: Uint8Array | undefined;
                                        dataHash?: Uint8Array | undefined;
                                        validatorsHash?: Uint8Array | undefined;
                                        nextValidatorsHash?: Uint8Array | undefined;
                                        consensusHash?: Uint8Array | undefined;
                                        appHash?: Uint8Array | undefined;
                                        lastResultsHash?: Uint8Array | undefined;
                                        evidenceHash?: Uint8Array | undefined;
                                        proposerAddress?: Uint8Array | undefined;
                                    } | undefined;
                                    commit?: {
                                        height?: string | number | import("long").Long | undefined;
                                        round?: number | undefined;
                                        blockId?: {
                                            hash?: Uint8Array | undefined;
                                            partSetHeader?: {
                                                total?: number | undefined;
                                                hash?: Uint8Array | undefined;
                                            } | undefined;
                                        } | undefined;
                                        signatures?: {
                                            blockIdFlag?: _267.BlockIDFlag | undefined;
                                            validatorAddress?: Uint8Array | undefined;
                                            timestamp?: Date | undefined;
                                            signature?: Uint8Array | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                } | undefined;
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array | undefined;
                                        pubKey?: {
                                            ed25519?: Uint8Array | undefined;
                                            secp256k1?: Uint8Array | undefined;
                                        } | undefined;
                                        votingPower?: string | number | import("long").Long | undefined;
                                        proposerPriority?: string | number | import("long").Long | undefined;
                                    }[] | undefined;
                                    proposer?: {
                                        address?: Uint8Array | undefined;
                                        pubKey?: {
                                            ed25519?: Uint8Array | undefined;
                                            secp256k1?: Uint8Array | undefined;
                                        } | undefined;
                                        votingPower?: string | number | import("long").Long | undefined;
                                        proposerPriority?: string | number | import("long").Long | undefined;
                                    } | undefined;
                                    totalVotingPower?: string | number | import("long").Long | undefined;
                                } | undefined;
                            } | undefined;
                            commonHeight?: string | number | import("long").Long | undefined;
                            byzantineValidators?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                            timestamp?: Date | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                lastCommit?: {
                    height?: string | number | import("long").Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: _267.BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: Date | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            }): _263.Block;
        };
    };
    const version: {
        App: {
            encode(message: _268.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _268.App;
            fromPartial(object: {
                protocol?: string | number | import("long").Long | undefined;
                software?: string | undefined;
            }): _268.App;
        };
        Consensus: {
            encode(message: _268.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _268.Consensus;
            fromPartial(object: {
                block?: string | number | import("long").Long | undefined;
                app?: string | number | import("long").Long | undefined;
            }): _268.Consensus;
        };
    };
}
