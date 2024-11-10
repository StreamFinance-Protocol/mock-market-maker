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
exports.Params = exports.OperatorParams = exports.VaultParams = exports.QuotingParams = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQuotingParams() {
    return {
        layers: 0,
        spreadMinPpm: 0,
        spreadBufferPpm: 0,
        skewFactorPpm: 0,
        orderSizePctPpm: 0,
        orderExpirationSeconds: 0,
        activationThresholdQuoteQuantums: new Uint8Array()
    };
}
exports.QuotingParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.layers !== 0) {
            writer.uint32(8).uint32(message.layers);
        }
        if (message.spreadMinPpm !== 0) {
            writer.uint32(16).uint32(message.spreadMinPpm);
        }
        if (message.spreadBufferPpm !== 0) {
            writer.uint32(24).uint32(message.spreadBufferPpm);
        }
        if (message.skewFactorPpm !== 0) {
            writer.uint32(32).uint32(message.skewFactorPpm);
        }
        if (message.orderSizePctPpm !== 0) {
            writer.uint32(40).uint32(message.orderSizePctPpm);
        }
        if (message.orderExpirationSeconds !== 0) {
            writer.uint32(48).uint32(message.orderExpirationSeconds);
        }
        if (message.activationThresholdQuoteQuantums.length !== 0) {
            writer.uint32(58).bytes(message.activationThresholdQuoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.layers = reader.uint32();
                    break;
                case 2:
                    message.spreadMinPpm = reader.uint32();
                    break;
                case 3:
                    message.spreadBufferPpm = reader.uint32();
                    break;
                case 4:
                    message.skewFactorPpm = reader.uint32();
                    break;
                case 5:
                    message.orderSizePctPpm = reader.uint32();
                    break;
                case 6:
                    message.orderExpirationSeconds = reader.uint32();
                    break;
                case 7:
                    message.activationThresholdQuoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseQuotingParams();
        message.layers = (_a = object.layers) !== null && _a !== void 0 ? _a : 0;
        message.spreadMinPpm = (_b = object.spreadMinPpm) !== null && _b !== void 0 ? _b : 0;
        message.spreadBufferPpm = (_c = object.spreadBufferPpm) !== null && _c !== void 0 ? _c : 0;
        message.skewFactorPpm = (_d = object.skewFactorPpm) !== null && _d !== void 0 ? _d : 0;
        message.orderSizePctPpm = (_e = object.orderSizePctPpm) !== null && _e !== void 0 ? _e : 0;
        message.orderExpirationSeconds = (_f = object.orderExpirationSeconds) !== null && _f !== void 0 ? _f : 0;
        message.activationThresholdQuoteQuantums = (_g = object.activationThresholdQuoteQuantums) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    }
};
function createBaseVaultParams() {
    return {
        status: 0,
        quotingParams: undefined
    };
}
exports.VaultParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.quotingParams !== undefined) {
            exports.QuotingParams.encode(message.quotingParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.quotingParams = exports.QuotingParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVaultParams();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.quotingParams = object.quotingParams !== undefined && object.quotingParams !== null ? exports.QuotingParams.fromPartial(object.quotingParams) : undefined;
        return message;
    }
};
function createBaseOperatorParams() {
    return {
        operator: ""
    };
}
exports.OperatorParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operator !== "") {
            writer.uint32(10).string(message.operator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOperatorParams();
        message.operator = (_a = object.operator) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseParams() {
    return {
        layers: 0,
        spreadMinPpm: 0,
        spreadBufferPpm: 0,
        skewFactorPpm: 0,
        orderSizePctPpm: 0,
        orderExpirationSeconds: 0,
        activationThresholdQuoteQuantums: new Uint8Array()
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.layers !== 0) {
            writer.uint32(8).uint32(message.layers);
        }
        if (message.spreadMinPpm !== 0) {
            writer.uint32(16).uint32(message.spreadMinPpm);
        }
        if (message.spreadBufferPpm !== 0) {
            writer.uint32(24).uint32(message.spreadBufferPpm);
        }
        if (message.skewFactorPpm !== 0) {
            writer.uint32(32).uint32(message.skewFactorPpm);
        }
        if (message.orderSizePctPpm !== 0) {
            writer.uint32(40).uint32(message.orderSizePctPpm);
        }
        if (message.orderExpirationSeconds !== 0) {
            writer.uint32(48).uint32(message.orderExpirationSeconds);
        }
        if (message.activationThresholdQuoteQuantums.length !== 0) {
            writer.uint32(58).bytes(message.activationThresholdQuoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.layers = reader.uint32();
                    break;
                case 2:
                    message.spreadMinPpm = reader.uint32();
                    break;
                case 3:
                    message.spreadBufferPpm = reader.uint32();
                    break;
                case 4:
                    message.skewFactorPpm = reader.uint32();
                    break;
                case 5:
                    message.orderSizePctPpm = reader.uint32();
                    break;
                case 6:
                    message.orderExpirationSeconds = reader.uint32();
                    break;
                case 7:
                    message.activationThresholdQuoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseParams();
        message.layers = (_a = object.layers) !== null && _a !== void 0 ? _a : 0;
        message.spreadMinPpm = (_b = object.spreadMinPpm) !== null && _b !== void 0 ? _b : 0;
        message.spreadBufferPpm = (_c = object.spreadBufferPpm) !== null && _c !== void 0 ? _c : 0;
        message.skewFactorPpm = (_d = object.skewFactorPpm) !== null && _d !== void 0 ? _d : 0;
        message.orderSizePctPpm = (_e = object.orderSizePctPpm) !== null && _e !== void 0 ? _e : 0;
        message.orderExpirationSeconds = (_f = object.orderExpirationSeconds) !== null && _f !== void 0 ? _f : 0;
        message.activationThresholdQuoteQuantums = (_g = object.activationThresholdQuoteQuantums) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkeWR4cHJvdG9jb2wvdjQtcHJvdG8vc3JjL2NvZGVnZW4vZHlkeHByb3RvY29sL3ZhdWx0L3BhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUEwQztBQWdJMUMsU0FBUyx1QkFBdUI7SUFDOUIsT0FBTztRQUNMLE1BQU0sRUFBRSxDQUFDO1FBQ1QsWUFBWSxFQUFFLENBQUM7UUFDZixlQUFlLEVBQUUsQ0FBQztRQUNsQixhQUFhLEVBQUUsQ0FBQztRQUNoQixlQUFlLEVBQUUsQ0FBQztRQUNsQixzQkFBc0IsRUFBRSxDQUFDO1FBQ3pCLGdDQUFnQyxFQUFFLElBQUksVUFBVSxFQUFFO0tBQ25ELENBQUM7QUFDSixDQUFDO0FBRVksUUFBQSxhQUFhLEdBQUc7SUFDM0IsTUFBTSxDQUFDLE9BQXNCLEVBQUUsU0FBcUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDckUsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUksT0FBTyxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQUU7WUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxPQUFPLENB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