import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.mars.mars";
export interface Product {
    id: number;
    productID: string;
    description: string;
    owner: string;
    price: string;
    creator: string;
}
export declare const Product: {
    encode(message: Product, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Product;
    fromJSON(object: any): Product;
    toJSON(message: Product): unknown;
    fromPartial(object: DeepPartial<Product>): Product;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
