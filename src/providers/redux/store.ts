import { configureStore } from "@reduxjs/toolkit";
import historicalDataReducer from "./features/historical-data.slice";
import stockOverViewReducer from "./features/overview-slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    historicalData: historicalDataReducer,
    stockOverviewData: stockOverViewReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
