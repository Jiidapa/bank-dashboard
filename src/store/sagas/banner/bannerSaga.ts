import {
  fetchBannersRequest,
  fetchBannersSuccess,
  fetchBannersFailure,
} from "../../slices/banner/bannerSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchBanners } from "@/services/banner";
import { Banner } from "@/mock/apiResponse";

type BannersResponse = {
  success: boolean;
  data: Banner[];
};

export function* fetchBannersSaga() {
  try {
    const response: BannersResponse = yield call(fetchBanners);
    yield put(fetchBannersSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchBannersFailure(error.message));
    } else {
      yield put(fetchBannersFailure("An unknown error occurred"));
    }
  }
}

export function* watchBannersSaga() {
  yield takeLatest(fetchBannersRequest.type, fetchBannersSaga);
}
