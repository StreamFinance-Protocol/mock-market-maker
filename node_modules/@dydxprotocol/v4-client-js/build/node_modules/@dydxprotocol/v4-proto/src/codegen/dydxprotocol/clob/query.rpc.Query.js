"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.clobPair = this.clobPair.bind(this);
        this.clobPairAll = this.clobPairAll.bind(this);
        this.mevNodeToNodeCalculation = this.mevNodeToNodeCalculation.bind(this);
        this.equityTierLimitConfiguration = this.equityTierLimitConfiguration.bind(this);
        this.blockRateLimitConfiguration = this.blockRateLimitConfiguration.bind(this);
        this.liquidationsConfiguration = this.liquidationsConfiguration.bind(this);
        this.statefulOrder = this.statefulOrder.bind(this);
        this.streamOrderbookUpdates = this.streamOrderbookUpdates.bind(this);
    }
    clobPair(request) {
        const data = query_1.QueryGetClobPairRequest.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.clob.Query", "ClobPair", data);
        return promise.then(data => query_1.QueryClobPairResponse.decode(new _m0.Reader(data)));
    }
    clobPairAll(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllClobPairRequest.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.clob.Query", "ClobPairAll", data);
        return promise.then(data => query_1.QueryClobPairAllResponse.decode(new _m0.Reader(data)));
    }
    mevNodeToNodeCalculation(request) {
        const data = query_1.MevNodeToNodeCalculationRequest.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.clob.Query", "MevNodeToNodeCalculation", data);
        return promise.then(data => query_1.MevNodeToNodeCalculationResponse.decode(new _m0.Reader(data)));
    }
    equityTierLimitConfiguration(request = {}) {
        const data = query_1.QueryEquityTierLimitConfigurationRequest.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.clob.Query", "EquityTierLimitConfiguration", data);
        return promise.then(data => query_1.QueryEquityTierLimitConfigurationResponse.decode(new _m0.Reader(data)));
    }
    blockRateLimitConfiguration(request = {}) {
        const data = query_1.QueryBlockRateLimitConfigurationRequest.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.clob.Query", "BlockRateLimitConfiguration", data);
        return promise.then(data => query_1.QueryBlockRateLimitConfigurationResponse.decode(new _m0.Reader(data)));
    }
    liquidationsConfiguration(request = {}) {
        const data = query_1.QueryLiquidationsConfigurationRequest.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.clob.Query", "LiquidationsConfiguration", data);
        return promise.then(data => query_1.QueryLiquidationsConfigurationResponse.decode(new _m0.Reader(data)));
    }
    statefulOrder(request) {
        const data = query_1.QueryStatefulOrderRequest.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.clob.Query", "StatefulOrder", data);
        return promise.then(data => query_1.QueryStatefulOrderResponse.decode(new _m0.Reader(data)));
    }
    streamOrderbookUpdates(request) {
        const data = query_1.StreamOrderbookUpdatesRequest.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.clob.Query", "StreamOrderbookUpdates", data);
        return promise.then(data => query_1.StreamOrderbookUpdatesResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        clobPair(request) {
            return queryService.clobPair(request);
        },
        clobPairAll(request) {
            return queryService.clobPairAll(request);
        },
        mevNodeToNodeCalculation(request) {
            return queryService.mevNodeToNodeCalculation(request);
        },
        equityTierLimitConfiguration(request) {
            return queryService.equityTierLimitConfiguration(request);
        },
        blockRateLimitConfiguration(request) {
            return queryService.blockRateLimitConfiguration(request);
        },
        liquidationsConfiguration(request) {
            return queryService.liquidationsConfiguration(request);
        },
        statefulOrder(request) {
            return queryService.statefulOrder(request);
        },
        streamOrderbookUpdates(request) {
            return queryService.streamOrderbookUpdates(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkucnBjLlF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkeWR4cHJvdG9jb2wvdjQtcHJvdG8vc3JjL2NvZGVnZW4vZHlkeHByb3RvY29sL2Nsb2IvcXVlcnkucnBjLlF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esd0RBQTBDO0FBQzFDLCtDQUF3RTtBQUN4RSxtQ0FBNGlCO0FBK0I1aUIsTUFBYSxlQUFlO0lBRzFCLFlBQVksR0FBUTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMs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