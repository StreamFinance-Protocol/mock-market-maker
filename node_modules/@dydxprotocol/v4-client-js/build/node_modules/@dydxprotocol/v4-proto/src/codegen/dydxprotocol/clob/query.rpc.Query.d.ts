import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGetClobPairRequest, QueryClobPairResponse, QueryAllClobPairRequest, QueryClobPairAllResponse, MevNodeToNodeCalculationRequest, MevNodeToNodeCalculationResponse, QueryEquityTierLimitConfigurationRequest, QueryEquityTierLimitConfigurationResponse, QueryBlockRateLimitConfigurationRequest, QueryBlockRateLimitConfigurationResponse, QueryLiquidationsConfigurationRequest, QueryLiquidationsConfigurationResponse, QueryStatefulOrderRequest, QueryStatefulOrderResponse, StreamOrderbookUpdatesRequest, StreamOrderbookUpdatesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a ClobPair by id. */
    clobPair(request: QueryGetClobPairRequest): Promise<QueryClobPairResponse>;
    /** Queries a list of ClobPair items. */
    clobPairAll(request?: QueryAllClobPairRequest): Promise<QueryClobPairAllResponse>;
    /** Runs the MEV node <> node calculation with the provided parameters. */
    mevNodeToNodeCalculation(request: MevNodeToNodeCalculationRequest): Promise<MevNodeToNodeCalculationResponse>;
    /** Queries EquityTierLimitConfiguration. */
    equityTierLimitConfiguration(request?: QueryEquityTierLimitConfigurationRequest): Promise<QueryEquityTierLimitConfigurationResponse>;
    /** Queries BlockRateLimitConfiguration. */
    blockRateLimitConfiguration(request?: QueryBlockRateLimitConfigurationRequest): Promise<QueryBlockRateLimitConfigurationResponse>;
    /** Queries LiquidationsConfiguration. */
    liquidationsConfiguration(request?: QueryLiquidationsConfigurationRequest): Promise<QueryLiquidationsConfigurationResponse>;
    /** Queries the stateful order for a given order id. */
    statefulOrder(request: QueryStatefulOrderRequest): Promise<QueryStatefulOrderResponse>;
    /**
     * Streams orderbook updates. Updates contain orderbook data
     * such as order placements, updates, and fills.
     */
    streamOrderbookUpdates(request: StreamOrderbookUpdatesRequest): Promise<StreamOrderbookUpdatesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    clobPair(request: QueryGetClobPairRequest): Promise<QueryClobPairResponse>;
    clobPairAll(request?: QueryAllClobPairRequest): Promise<QueryClobPairAllResponse>;
    mevNodeToNodeCalculation(request: MevNodeToNodeCalculationRequest): Promise<MevNodeToNodeCalculationResponse>;
    equityTierLimitConfiguration(request?: QueryEquityTierLimitConfigurationRequest): Promise<QueryEquityTierLimitConfigurationResponse>;
    blockRateLimitConfiguration(request?: QueryBlockRateLimitConfigurationRequest): Promise<QueryBlockRateLimitConfigurationResponse>;
    liquidationsConfiguration(request?: QueryLiquidationsConfigurationRequest): Promise<QueryLiquidationsConfigurationResponse>;
    statefulOrder(request: QueryStatefulOrderRequest): Promise<QueryStatefulOrderResponse>;
    streamOrderbookUpdates(request: StreamOrderbookUpdatesRequest): Promise<StreamOrderbookUpdatesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    clobPair(request: QueryGetClobPairRequest): Promise<QueryClobPairResponse>;
    clobPairAll(request?: QueryAllClobPairRequest): Promise<QueryClobPairAllResponse>;
    mevNodeToNodeCalculation(request: MevNodeToNodeCalculationRequest): Promise<MevNodeToNodeCalculationResponse>;
    equityTierLimitConfiguration(request?: QueryEquityTierLimitConfigurationRequest): Promise<QueryEquityTierLimitConfigurationResponse>;
    blockRateLimitConfiguration(request?: QueryBlockRateLimitConfigurationRequest): Promise<QueryBlockRateLimitConfigurationResponse>;
    liquidationsConfiguration(request?: QueryLiquidationsConfigurationRequest): Promise<QueryLiquidationsConfigurationResponse>;
    statefulOrder(request: QueryStatefulOrderRequest): Promise<QueryStatefulOrderResponse>;
    streamOrderbookUpdates(request: StreamOrderbookUpdatesRequest): Promise<StreamOrderbookUpdatesResponse>;
};
