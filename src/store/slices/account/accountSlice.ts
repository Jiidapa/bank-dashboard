import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "@/mock/apiResponse";
import { RootState } from "@/store/store";

export type AccountState = {
  data: Account[];
  loading: boolean;
  error: string | null;
};

const initialState: AccountState = {
  data: [],
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    fetchAccountsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAccountsSuccess: (state, action: PayloadAction<Account[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchAccountsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getAccounts = (state: RootState) => state.account.data;

export const {
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
} = accountSlice.actions;
export default accountSlice.reducer;
