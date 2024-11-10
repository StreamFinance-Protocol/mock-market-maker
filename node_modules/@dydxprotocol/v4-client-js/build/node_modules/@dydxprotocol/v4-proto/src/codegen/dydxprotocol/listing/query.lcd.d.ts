import { LCDClient } from "@osmonauts/lcd";
import { QueryListingVaultDepositParams, QueryListingVaultDepositParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    listingVaultDepositParams(_params?: QueryListingVaultDepositParams): Promise<QueryListingVaultDepositParamsResponseSDKType>;
}
