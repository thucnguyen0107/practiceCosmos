package keeper

import (
	"context"

	"github.com/cosmonaut/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ProductAll(c context.Context, req *types.QueryAllProductRequest) (*types.QueryAllProductResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var products []types.Product
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	productStore := prefix.NewStore(store, types.KeyPrefix(types.ProductKey))

	pageRes, err := query.Paginate(productStore, req.Pagination, func(key []byte, value []byte) error {
		var product types.Product
		if err := k.cdc.Unmarshal(value, &product); err != nil {
			return err
		}

		products = append(products, product)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProductResponse{Product: products, Pagination: pageRes}, nil
}

func (k Keeper) Product(c context.Context, req *types.QueryGetProductRequest) (*types.QueryGetProductResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	product, found := k.GetProduct(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetProductResponse{Product: product}, nil
}
