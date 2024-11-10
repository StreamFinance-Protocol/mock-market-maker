import { LCDClient } from "@osmonauts/lcd";
import { QueryMarketMapperRevenueShareParams, QueryMarketMapperRevenueShareParamsResponseSDKType, QueryMarketMapperRevShareDetails, QueryMarketMapperRevShareDetailsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    marketMapperRevenueShareParams(_params?: QueryMarketMapperRevenueShareParams): Promise<QueryMarketMapperRevenueShareParamsResponseSDKType>;
    marketMapperRevShareDetails(params: QueryMarketMapperRevShareDetails): Promise<QueryMarketMapperRevShareDetailsResponseSDKType>;
}
