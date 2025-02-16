import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/mock/apiResponse";
import { RootState } from "@/store/store";

export type UserState = {
  name: string;
  greetingMessage: string;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  name: "",
  greetingMessage: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.greetingMessage = action.payload.greetingMessage;
      state.loading = false;
      state.error = null;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getUser = (state: RootState) => state.user;

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
