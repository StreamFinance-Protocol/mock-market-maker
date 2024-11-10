import { Rpc } from "../../helpers";
import { MsgSetMarketsHardCap, MsgSetMarketsHardCapResponse, MsgCreateMarketPermissionless, MsgCreateMarketPermissionlessResponse, MsgSetListingVaultDepositParams, MsgSetListingVaultDepositParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** SetMarketsHardCap sets a hard cap on the number of markets listed */
    setMarketsHardCap(request: MsgSetMarketsHardCap): Promise<MsgSetMarketsHardCapResponse>;
    /** CreateMarketPermissionless creates a new market without going through x/gov */
    createMarketPermissionless(request: MsgCreateMarketPermissionless): Promise<MsgCreateMarketPermissionlessResponse>;
    /** SetListingVaultDepositParams sets PML megavault deposit params */
    setListingVaultDepositParams(request: MsgSetListingVaultDepositParams): Promise<MsgSetListingVaultDepositParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setMarketsHardCap(request: MsgSetMarketsHardCap): Promise<MsgSetMarketsHardCapResponse>;
    createMarketPermissionless(request: MsgCreateMarketPermissionless): Promise<MsgCreateMarketPermissionlessResponse>;
    setListingVaultDepositParams(request: MsgSetListingVaultDepositParams): Promise<MsgSetListingVaultDepositParamsResponse>;
}
