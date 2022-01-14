package mars

import (
	"math/rand"

	"github.com/cosmonaut/mars/testutil/sample"
	marssimulation "github.com/cosmonaut/mars/x/mars/simulation"
	"github.com/cosmonaut/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = marssimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateProduct = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateProduct int = 100

	opWeightMsgUpdateProduct = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateProduct int = 100

	opWeightMsgDeleteProduct = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteProduct int = 100

	opWeightMsgBuyProduct = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuyProduct int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	marsGenesis := types.GenesisState{
		ProductList: []types.Product{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ProductCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&marsGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateProduct int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateProduct, &weightMsgCreateProduct, nil,
		func(_ *rand.Rand) {
			weightMsgCreateProduct = defaultWeightMsgCreateProduct
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateProduct,
		marssimulation.SimulateMsgCreateProduct(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateProduct int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateProduct, &weightMsgUpdateProduct, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateProduct = defaultWeightMsgUpdateProduct
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateProduct,
		marssimulation.SimulateMsgUpdateProduct(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteProduct int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteProduct, &weightMsgDeleteProduct, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteProduct = defaultWeightMsgDeleteProduct
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteProduct,
		marssimulation.SimulateMsgDeleteProduct(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBuyProduct int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuyProduct, &weightMsgBuyProduct, nil,
		func(_ *rand.Rand) {
			weightMsgBuyProduct = defaultWeightMsgBuyProduct
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuyProduct,
		marssimulation.SimulateMsgBuyProduct(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
