import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateProduct } from "./types/mars/tx";
import { MsgBuyProduct } from "./types/mars/tx";
import { MsgCreateProduct } from "./types/mars/tx";
import { MsgDeleteProduct } from "./types/mars/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgUpdateProduct: (data: MsgUpdateProduct) => EncodeObject;
    msgBuyProduct: (data: MsgBuyProduct) => EncodeObject;
    msgCreateProduct: (data: MsgCreateProduct) => EncodeObject;
    msgDeleteProduct: (data: MsgDeleteProduct) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
