import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.mars.mars";
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
export interface MsgUpdateProductResponse {
}
export interface MsgDeleteProduct {
    creator: string;
    id: number;
}
export interface MsgDeleteProductResponse {
}
export interface MsgBuyProduct {
    creator: string;
    productID: string;
}
export interface MsgBuyProductResponse {
}
export declare const MsgCreateProduct: {
    encode(message: MsgCreateProduct, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateProduct;
    fromJSON(object: any): MsgCreateProduct;
    toJSON(message: MsgCreateProduct): unknown;
    fromPartial(object: DeepPartial<MsgCreateProduct>): MsgCreateProduct;
};
export declare const MsgCreateProductResponse: {
    encode(message: MsgCreateProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateProductResponse;
    fromJSON(object: any): MsgCreateProductResponse;
    toJSON(message: MsgCreateProductResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateProductResponse>): MsgCreateProductResponse;
};
export declare const MsgUpdateProduct: {
    encode(message: MsgUpdateProduct, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateProduct;
    fromJSON(object: any): MsgUpdateProduct;
    toJSON(message: MsgUpdateProduct): unknown;
    fromPartial(object: DeepPartial<MsgUpdateProduct>): MsgUpdateProduct;
};
export declare const MsgUpdateProductResponse: {
    encode(_: MsgUpdateProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateProductResponse;
    fromJSON(_: any): MsgUpdateProductResponse;
    toJSON(_: MsgUpdateProductResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateProductResponse>): MsgUpdateProductResponse;
};
export declare const MsgDeleteProduct: {
    encode(message: MsgDeleteProduct, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteProduct;
    fromJSON(object: any): MsgDeleteProduct;
    toJSON(message: MsgDeleteProduct): unknown;
    fromPartial(object: DeepPartial<MsgDeleteProduct>): MsgDeleteProduct;
};
export declare const MsgDeleteProductResponse: {
    encode(_: MsgDeleteProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteProductResponse;
    fromJSON(_: any): MsgDeleteProductResponse;
    toJSON(_: MsgDeleteProductResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteProductResponse>): MsgDeleteProductResponse;
};
export declare const MsgBuyProduct: {
    encode(message: MsgBuyProduct, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyProduct;
    fromJSON(object: any): MsgBuyProduct;
    toJSON(message: MsgBuyProduct): unknown;
    fromPartial(object: DeepPartial<MsgBuyProduct>): MsgBuyProduct;
};
export declare const MsgBuyProductResponse: {
    encode(_: MsgBuyProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyProductResponse;
    fromJSON(_: any): MsgBuyProductResponse;
    toJSON(_: MsgBuyProductResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyProductResponse>): MsgBuyProductResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse>;
    UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse>;
    DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    BuyProduct(request: MsgBuyProduct): Promise<MsgBuyProductResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse>;
    UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse>;
    DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse>;
    BuyProduct(request: MsgBuyProduct): Promise<MsgBuyProductResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
