import { StockOverviewData } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  data: StockOverviewData | null;
} = {
  data: null,
};

const { reducer: stockOverViewReducer, actions } = createSlice({
  initialState: initialState,
  name: "overview-slice",
  reducers: {
    updateStockData: (
      state,
      action: PayloadAction<StockOverviewData | null>
    ) => {
      state.data = action.payload;
    },
  },
});

export default stockOverViewReducer;
export const { updateStockData } = actions;
