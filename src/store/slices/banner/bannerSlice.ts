import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Banner } from "@/mock/apiResponse";
import { RootState } from "@/store/store";

export type BannerState = {
  data: Banner[];
  loading: boolean;
  error: string | null;
};

const initialState: BannerState = {
  data: [],
  loading: false,
  error: null,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    fetchBannersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBannersSuccess: (state, action: PayloadAction<Banner[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchBannersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getBanners = (state: RootState) => state.banner.data;

export const { fetchBannersRequest, fetchBannersSuccess, fetchBannersFailure } =
  bannerSlice.actions;
export default bannerSlice.reducer;
