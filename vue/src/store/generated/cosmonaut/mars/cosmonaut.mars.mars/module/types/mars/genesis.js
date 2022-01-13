/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../mars/params";
import { Product } from "../mars/product";
export const protobufPackage = "cosmonaut.mars.mars";
const baseGenesisState = { productCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.productList) {
            Product.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.productCount !== 0) {
            writer.uint32(24).uint64(message.productCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.productList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.productList.push(Product.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.productCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.productList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.productList !== undefined && object.productList !== null) {
            for (const e of object.productList) {
                message.productList.push(Product.fromJSON(e));
            }
        }
        if (object.productCount !== undefined && object.productCount !== null) {
            message.productCount = Number(object.productCount);
        }
        else {
            message.productCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.productList) {
            obj.productList = message.productList.map((e) => e ? Product.toJSON(e) : undefined);
        }
        else {
            obj.productList = [];
        }
        message.productCount !== undefined &&
            (obj.productCount = message.productCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.productList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.productList !== undefined && object.productList !== null) {
            for (const e of object.productList) {
                message.productList.push(Product.fromPartial(e));
            }
        }
        if (object.productCount !== undefined && object.productCount !== null) {
            message.productCount = object.productCount;
        }
        else {
            message.productCount = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
