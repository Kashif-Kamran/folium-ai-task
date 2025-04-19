import { HistoricalData } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { data: HistoricalData } = {
  data: [],
};

const { reducer: historicalDataReducer, actions } = createSlice({
  name: "historical-data-reducer",
  initialState: initialState,
  reducers: {
    updateHistoricalData: (state, action: PayloadAction<HistoricalData>) => {
      state.data = action.payload;
    },
  },
});

export default historicalDataReducer;
export const { updateHistoricalData } = actions;
