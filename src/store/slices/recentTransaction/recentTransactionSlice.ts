import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecentTransaction } from "@/mock/apiResponse";
import { RootState } from "@/store/store";

export type RecentTransactionState = {
  data: RecentTransaction[];
  loading: boolean;
  error: string | null;
};

const initialState: RecentTransactionState = {
  data: [],
  loading: false,
  error: null,
};

const recentTransactionSlice = createSlice({
  name: "recentTransaction",
  initialState,
  reducers: {
    fetchRecentTransactionRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRecentTransactionSuccess: (
      state,
      action: PayloadAction<RecentTransaction[]>
    ) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRecentTransactionFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getRecentTransaction = (state: RootState) =>
  state.recentTransaction.data;

export const {
  fetchRecentTransactionRequest,
  fetchRecentTransactionSuccess,
  fetchRecentTransactionFailure,
} = recentTransactionSlice.actions;
export default recentTransactionSlice.reducer;
