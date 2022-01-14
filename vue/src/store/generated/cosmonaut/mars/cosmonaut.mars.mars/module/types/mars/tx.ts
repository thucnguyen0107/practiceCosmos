/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "cosmonaut.mars.mars";

export interface MsgCreateProduct {
  creator: string;
  productID: string;
  description: string;
  owner: string;
  price: string;
}

export interface MsgCreateProductResponse {
  id: number;
}

export interface MsgUpdateProduct {
  creator: string;
  id: number;
  productID: string;
  description: string;
  owner: string;
  price: string;
}

export interface MsgUpdateProductResponse {}

export interface MsgDeleteProduct {
  creator: string;
  id: number;
}

export interface MsgDeleteProductResponse {}

export interface MsgBuyProduct {
  creator: string;
  productID: string;
}

export interface MsgBuyProductResponse {}

const baseMsgCreateProduct: object = {
  creator: "",
  productID: "",
  description: "",
  owner: "",
  price: "",
};

export const MsgCreateProduct = {
  encode(message: MsgCreateProduct, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.productID !== "") {
      writer.uint32(18).string(message.productID);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProduct } as MsgCreateProduct;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.productID = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProduct {
    const message = { ...baseMsgCreateProduct } as MsgCreateProduct;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.productID !== undefined && object.productID !== null) {
      message.productID = String(object.productID);
    } else {
      message.productID = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    return message;
  },

  toJSON(message: MsgCreateProduct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.productID !== undefined && (obj.productID = message.productID);
    message.description !== undefined &&
      (obj.description = message.description);
    message.owner !== undefined && (obj.owner = message.owner);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProduct>): MsgCreateProduct {
    const message = { ...baseMsgCreateProduct } as MsgCreateProduct;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.productID !== undefined && object.productID !== null) {
      message.productID = object.productID;
    } else {
      message.productID = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    return message;
  },
};

const baseMsgCreateProductResponse: object = { id: 0 };

export const MsgCreateProductResponse = {
  encode(
    message: MsgCreateProductResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProductResponse,
    } as MsgCreateProductResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProductResponse {
    const message = {
      ...baseMsgCreateProductResponse,
    } as MsgCreateProductResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateProductResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateProductResponse>
  ): MsgCreateProductResponse {
    const message = {
      ...baseMsgCreateProductResponse,
    } as MsgCreateProductResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateProduct: object = {
  creator: "",
  id: 0,
  productID: "",
  description: "",
  owner: "",
  price: "",
};

export const MsgUpdateProduct = {
  encode(message: MsgUpdateProduct, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.productID !== "") {
      writer.uint32(26).string(message.productID);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.price !== "") {
      writer.uint32(50).string(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateProduct } as MsgUpdateProduct;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.productID = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        case 6:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProduct {
    const message = { ...baseMsgUpdateProduct } as MsgUpdateProduct;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.productID !== undefined && object.productID !== null) {
      message.productID = String(object.productID);
    } else {
      message.productID = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateProduct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.productID !== undefined && (obj.productID = message.productID);
    message.description !== undefined &&
      (obj.description = message.description);
    message.owner !== undefined && (obj.owner = message.owner);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProduct>): MsgUpdateProduct {
    const message = { ...baseMsgUpdateProduct } as MsgUpdateProduct;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.productID !== undefined && object.productID !== null) {
      message.productID = object.productID;
    } else {
      message.productID = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    return message;
  },
};

const baseMsgUpdateProductResponse: object = {};

export const MsgUpdateProductResponse = {
  encode(
    _: MsgUpdateProductResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProductResponse,
    } as MsgUpdateProductResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateProductResponse {
    const message = {
      ...baseMsgUpdateProductResponse,
    } as MsgUpdateProductResponse;
    return message;
  },

  toJSON(_: MsgUpdateProductResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProductResponse>
  ): MsgUpdateProductResponse {
    const message = {
      ...baseMsgUpdateProductResponse,
    } as MsgUpdateProductResponse;
    return message;
  },
};

const baseMsgDeleteProduct: object = { creator: "", id: 0 };

export const MsgDeleteProduct = {
  encode(message: MsgDeleteProduct, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteProduct } as MsgDeleteProduct;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProduct {
    const message = { ...baseMsgDeleteProduct } as MsgDeleteProduct;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteProduct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteProduct>): MsgDeleteProduct {
    const message = { ...baseMsgDeleteProduct } as MsgDeleteProduct;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteProductResponse: object = {};

export const MsgDeleteProductResponse = {
  encode(
    _: MsgDeleteProductResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProductResponse,
    } as MsgDeleteProductResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteProductResponse {
    const message = {
      ...baseMsgDeleteProductResponse,
    } as MsgDeleteProductResponse;
    return message;
  },

  toJSON(_: MsgDeleteProductResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProductResponse>
  ): MsgDeleteProductResponse {
    const message = {
      ...baseMsgDeleteProductResponse,
    } as MsgDeleteProductResponse;
    return message;
  },
};

const baseMsgBuyProduct: object = { creator: "", productID: "" };

export const MsgBuyProduct = {
  encode(message: MsgBuyProduct, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.productID !== "") {
      writer.uint32(18).string(message.productID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyProduct } as MsgBuyProduct;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.productID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyProduct {
    const message = { ...baseMsgBuyProduct } as MsgBuyProduct;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.productID !== undefined && object.productID !== null) {
      message.productID = String(object.productID);
    } else {
      message.productID = "";
    }
    return message;
  },

  toJSON(message: MsgBuyProduct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.productID !== undefined && (obj.productID = message.productID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyProduct>): MsgBuyProduct {
    const message = { ...baseMsgBuyProduct } as MsgBuyProduct;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.productID !== undefined && object.productID !== null) {
      message.productID = object.productID;
    } else {
      message.productID = "";
    }
    return message;
  },
};

const baseMsgBuyProductResponse: object = {};

export const MsgBuyProductResponse = {
  encode(_: MsgBuyProductResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyProductResponse } as MsgBuyProductResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyProductResponse {
    const message = { ...baseMsgBuyProductResponse } as MsgBuyProductResponse;
    return message;
  },

  toJSON(_: MsgBuyProductResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyProductResponse>): MsgBuyProductResponse {
    const message = { ...baseMsgBuyProductResponse } as MsgBuyProductResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse>;
  UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse>;
  DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyProduct(request: MsgBuyProduct): Promise<MsgBuyProductResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse> {
    const data = MsgCreateProduct.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.mars.mars.Msg",
      "CreateProduct",
      data
    );
    return promise.then((data) =>
      MsgCreateProductResponse.decode(new Reader(data))
    );
  }

  UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse> {
    const data = MsgUpdateProduct.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.mars.mars.Msg",
      "UpdateProduct",
      data
    );
    return promise.then((data) =>
      MsgUpdateProductResponse.decode(new Reader(data))
    );
  }

  DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse> {
    const data = MsgDeleteProduct.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.mars.mars.Msg",
      "DeleteProduct",
      data
    );
    return promise.then((data) =>
      MsgDeleteProductResponse.decode(new Reader(data))
    );
  }

  BuyProduct(request: MsgBuyProduct): Promise<MsgBuyProductResponse> {
    const data = MsgBuyProduct.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.mars.mars.Msg",
      "BuyProduct",
      data
    );
    return promise.then((data) =>
      MsgBuyProductResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
