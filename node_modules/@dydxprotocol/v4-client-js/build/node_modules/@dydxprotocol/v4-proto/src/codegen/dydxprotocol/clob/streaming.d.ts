import { StreamOrderbookFill, StreamOrderbookFillSDKType } from "./query";
import { StreamSubaccountUpdate, StreamSubaccountUpdateSDKType } from "../subaccounts/streaming";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** StagedFinalizeBlockEvent is an event staged during `FinalizeBlock`. */
export interface StagedFinalizeBlockEvent {
    orderFill?: StreamOrderbookFill;
    subaccountUpdate?: StreamSubaccountUpdate;
}
/** StagedFinalizeBlockEvent is an event staged during `FinalizeBlock`. */
export interface StagedFinalizeBlockEventSDKType {
    order_fill?: StreamOrderbookFillSDKType;
    subaccount_update?: StreamSubaccountUpdateSDKType;
}
export declare const StagedFinalizeBlockEvent: {
    encode(message: StagedFinalizeBlockEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StagedFinalizeBlockEvent;
    fromPartial(object: DeepPartial<StagedFinalizeBlockEvent>): StagedFinalizeBlockEvent;
};
