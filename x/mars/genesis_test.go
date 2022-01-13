package mars_test

import (
	"testing"

	keepertest "github.com/cosmonaut/mars/testutil/keeper"
	"github.com/cosmonaut/mars/testutil/nullify"
	"github.com/cosmonaut/mars/x/mars"
	"github.com/cosmonaut/mars/x/mars/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ProductList: []types.Product{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ProductCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarsKeeper(t)
	mars.InitGenesis(ctx, *k, genesisState)
	got := mars.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ProductList, got.ProductList)
	require.Equal(t, genesisState.ProductCount, got.ProductCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
