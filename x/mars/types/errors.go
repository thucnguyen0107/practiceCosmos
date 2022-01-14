package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/mars module sentinel errors
var (
	ErrSample = sdkerrors.Register(ModuleName, 1100, "sample error")
)

var (
	ErrNameDoesNotExist = sdkerrors.Register(ModuleName, 1, "name does not exist")

	ErrProductDoesNotExist  = sdkerrors.Register(ModuleName, 2, "product does not exist")
	ErrProductAlreadyExists = sdkerrors.Register(ModuleName, 3, "product already exists")
)
