import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryMarketMapperRevenueShareParams, QueryMarketMapperRevenueShareParamsResponse, QueryMarketMapperRevShareDetails, QueryMarketMapperRevShareDetailsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * MarketMapperRevenueShareParams queries the revenue share params for the
     * market mapper
     */
    marketMapperRevenueShareParams(request?: QueryMarketMapperRevenueShareParams): Promise<QueryMarketMapperRevenueShareParamsResponse>;
    /** Queries market mapper revenue share details for a specific market */
    marketMapperRevShareDetails(request: QueryMarketMapperRevShareDetails): Promise<QueryMarketMapperRevShareDetailsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    marketMapperRevenueShareParams(request?: QueryMarketMapperRevenueShareParams): Promise<QueryMarketMapperRevenueShareParamsResponse>;
    marketMapperRevShareDetails(request: QueryMarketMapperRevShareDetails): Promise<QueryMarketMapperRevShareDetailsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    marketMapperRevenueShareParams(request?: QueryMarketMapperRevenueShareParams): Promise<QueryMarketMapperRevenueShareParamsResponse>;
    marketMapperRevShareDetails(request: QueryMarketMapperRevShareDetails): Promise<QueryMarketMapperRevShareDetailsResponse>;
};
