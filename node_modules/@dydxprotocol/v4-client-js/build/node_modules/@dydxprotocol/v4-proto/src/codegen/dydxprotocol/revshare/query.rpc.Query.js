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
        this.marketMapperRevenueShareParams = this.marketMapperRevenueShareParams.bind(this);
        this.marketMapperRevShareDetails = this.marketMapperRevShareDetails.bind(this);
    }
    marketMapperRevenueShareParams(request = {}) {
        const data = query_1.QueryMarketMapperRevenueShareParams.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.revshare.Query", "MarketMapperRevenueShareParams", data);
        return promise.then(data => query_1.QueryMarketMapperRevenueShareParamsResponse.decode(new _m0.Reader(data)));
    }
    marketMapperRevShareDetails(request) {
        const data = query_1.QueryMarketMapperRevShareDetails.encode(request).finish();
        const promise = this.rpc.request("dydxprotocol.revshare.Query", "MarketMapperRevShareDetails", data);
        return promise.then(data => query_1.QueryMarketMapperRevShareDetailsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        marketMapperRevenueShareParams(request) {
            return queryService.marketMapperRevenueShareParams(request);
        },
        marketMapperRevShareDetails(request) {
            return queryService.marketMapperRevShareDetails(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkucnBjLlF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkeWR4cHJvdG9jb2wvdjQtcHJvdG8vc3JjL2NvZGVnZW4vZHlkeHByb3RvY29sL3JldnNoYXJlL3F1ZXJ5LnJwYy5RdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUEwQztBQUMxQywrQ0FBd0U7QUFDeEUsbUNBQXVMO0FBYXZMLE1BQWEsZUFBZTtJQUcxQixZQUFZLEdBQVE7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsOEJBQThCLENBQUMsVUFBK0MsRUFBRTtRQUM5RSxNQUFNLElBQUksR0FBRywyQ0FBbUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEcsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsbURBQTJDLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVELDJCQUEyQixDQUFDLE9BQXlDO1FBQ25FLE1BQU0sSUFBSSxHQUFHLHdDQUFnQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2RSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnREFBd0MsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0NBRUY7QUFyQkQsMENBcUJDO0FBQ00sTUFBTSx1QkFBdUIsR0FBRyxDQUFDLElBQWlCLEVBQUUsRUFBRTtJQUMzRCxNQUFNLEdBQUcsR0FBRyxJQUFBLGtDQUF1QixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLE9BQU87UUFDTCw4QkFBOEIsQ0FBQyxPQUE2QztZQUMxRSxPQUFPLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQsMkJBQTJCLENBQUMsT0FBeUM7WUFDbkUsT0FBTyxZQUFZLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUVGLENBQUM7QUFDSixDQUFDLENBQUM7QUFiVyxRQUFBLHVCQUF1QiwyQkFhbEMifQ==