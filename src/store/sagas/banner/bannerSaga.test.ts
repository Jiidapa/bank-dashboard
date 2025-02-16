import { testSaga } from "redux-saga-test-plan";
import { fetchBannersSaga } from "./bannerSaga";
import {
  fetchBannersSuccess,
  fetchBannersFailure,
} from "../../slices/banner/bannerSlice";
import { fetchBanners } from "@/services/banner";
import { banners } from "@/mock/apiResponse";

describe("fetchBannersSaga", () => {
  it("should handle success case", () => {
    testSaga(fetchBannersSaga)
      .next()
      .call(fetchBanners)
      .next({
        data: banners,
        success: true,
      })
      .put(fetchBannersSuccess(banners))
      .next()
      .isDone();
  });

  it("should handle failure case", () => {
    testSaga(fetchBannersSaga)
      .next()
      .call(fetchBanners)
      .throw(new Error("Failed to fetch Banners"))
      .put(fetchBannersFailure("Failed to fetch Banners"))
      .next()
      .isDone();
  });
});
