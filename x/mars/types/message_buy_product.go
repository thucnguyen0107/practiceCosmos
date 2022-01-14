package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyProduct = "buy_product"

var _ sdk.Msg = &MsgBuyProduct{}

func NewMsgBuyProduct(creator string, productID string) *MsgBuyProduct {
	return &MsgBuyProduct{
		Creator:   creator,
		ProductID: productID,
	}
}

func (msg *MsgBuyProduct) Route() string {
	return RouterKey
}

func (msg *MsgBuyProduct) Type() string {
	return TypeMsgBuyProduct
}

func (msg *MsgBuyProduct) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyProduct) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyProduct) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
