import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../mars/params";
import { Product } from "../mars/product";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "cosmonaut.mars.mars";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetProductRequest {
    id: number;
}
export interface QueryGetProductResponse {
    Product: Product | undefined;
}
export interface QueryAllProductRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllProductResponse {
    Product: Product[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetProductRequest: {
    encode(message: QueryGetProductRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProductRequest;
    fromJSON(object: any): QueryGetProductRequest;
    toJSON(message: QueryGetProductRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetProductRequest>): QueryGetProductRequest;
};
export declare const QueryGetProductResponse: {
    encode(message: QueryGetProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProductResponse;
    fromJSON(object: any): QueryGetProductResponse;
    toJSON(message: QueryGetProductResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetProductResponse>): QueryGetProductResponse;
};
export declare const QueryAllProductRequest: {
    encode(message: QueryAllProductRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProductRequest;
    fromJSON(object: any): QueryAllProductRequest;
    toJSON(message: QueryAllProductRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllProductRequest>): QueryAllProductRequest;
};
export declare const QueryAllProductResponse: {
    encode(message: QueryAllProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProductResponse;
    fromJSON(object: any): QueryAllProductResponse;
    toJSON(message: QueryAllProductResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllProductResponse>): QueryAllProductResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Product by id. */
    Product(request: QueryGetProductRequest): Promise<QueryGetProductResponse>;
    /** Queries a list of Product items. */
    ProductAll(request: QueryAllProductRequest): Promise<QueryAllProductResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Product(request: QueryGetProductRequest): Promise<QueryGetProductResponse>;
    ProductAll(request: QueryAllProductRequest): Promise<QueryAllProductResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
