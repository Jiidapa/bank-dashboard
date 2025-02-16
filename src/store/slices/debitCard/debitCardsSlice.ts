import { DebitCard } from "@/mock/apiResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export type DebitCardsState = {
  data: DebitCard[];
  loading: boolean;
  error: string | null;
};

const initialState: DebitCardsState = {
  data: [],
  loading: false,
  error: null,
};

const debitCardSlice = createSlice({
  name: "debitCard",
  initialState,
  reducers: {
    fetchDebitCardsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDebitCardsSuccess: (state, action: PayloadAction<DebitCard[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDebitCardsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getDebitCards = (state: RootState) => state.debitCard.data;

export const {
  fetchDebitCardsRequest,
  fetchDebitCardsSuccess,
  fetchDebitCardsFailure,
} = debitCardSlice.actions;
export default debitCardSlice.reducer;
