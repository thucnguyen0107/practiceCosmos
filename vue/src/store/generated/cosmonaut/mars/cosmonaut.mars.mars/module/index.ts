// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateProduct } from "./types/mars/tx";
import { MsgUpdateProduct } from "./types/mars/tx";
import { MsgDeleteProduct } from "./types/mars/tx";


const types = [
  ["/cosmonaut.mars.mars.MsgCreateProduct", MsgCreateProduct],
  ["/cosmonaut.mars.mars.MsgUpdateProduct", MsgUpdateProduct],
  ["/cosmonaut.mars.mars.MsgDeleteProduct", MsgDeleteProduct],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateProduct: (data: MsgCreateProduct): EncodeObject => ({ typeUrl: "/cosmonaut.mars.mars.MsgCreateProduct", value: MsgCreateProduct.fromPartial( data ) }),
    msgUpdateProduct: (data: MsgUpdateProduct): EncodeObject => ({ typeUrl: "/cosmonaut.mars.mars.MsgUpdateProduct", value: MsgUpdateProduct.fromPartial( data ) }),
    msgDeleteProduct: (data: MsgDeleteProduct): EncodeObject => ({ typeUrl: "/cosmonaut.mars.mars.MsgDeleteProduct", value: MsgDeleteProduct.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
