package simulation

import (
	"math/rand"

	"github.com/cosmonaut/mars/x/mars/keeper"
	"github.com/cosmonaut/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgBuyProduct(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgBuyProduct{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the BuyProduct simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "BuyProduct simulation not implemented"), nil, nil
	}
}
