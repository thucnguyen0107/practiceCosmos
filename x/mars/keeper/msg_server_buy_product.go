package keeper

import (
	"context"
	"fmt"
	"strconv"

	"github.com/cosmonaut/mars/x/mars/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BuyProduct(goCtx context.Context, msg *types.MsgBuyProduct) (*types.MsgBuyProductResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	key, err := strconv.ParseUint(msg.ProductID, 10, 64)
	if err != nil {
		return nil, fmt.Errorf("Can not parse product ID")
	}

	//    if !k.IsProductPresent(ctx, key) {
	//    	return nil, sdkerrors.Wrap(types.ErrNameDoesNotExist, msg.ProductID)
	//    }

	product, found := k.GetProduct(ctx, key)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrProductDoesNotExist, "Product not found")
	}

	creatorAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, fmt.Errorf("Can not compile creator")
	}

	ownerAddr, err := sdk.AccAddressFromBech32(product.Owner)

	if creatorAddr.Equals(ownerAddr) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "You are product owner")
	}

	price, _ := sdk.ParseCoinsNormalized(product.Price)

	error := k.bankKeeper.SendCoins(ctx, creatorAddr, ownerAddr, price) // chuyển một lượng token bằng đúng với price của product từ người mua sang cho người bán
	if error != nil {
		return nil, error
	}

	product.Owner = msg.Creator // chuyển quyền sở hữu cho người mua

	k.SetProduct(ctx, product) // set lại product
	return &types.MsgBuyProductResponse{}, nil
}
