import { StockOverviewData } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  data: StockOverviewData;
} = {
  data: {
    currentPrice: 0,
    high: 0,
    low: 0,
    open: 0,
    symbol: "IBM",
  },
};

const { reducer: stockOverViewReducer, actions } = createSlice({
  initialState: initialState,
  name: "overview-slice",
  reducers: {
    updateStockData: (
      state,
      action: PayloadAction<StockOverviewData | null>
    ) => {
      if (action.payload) state.data = action.payload;
    },
  },
});

export default stockOverViewReducer;
export const { updateStockData } = actions;
