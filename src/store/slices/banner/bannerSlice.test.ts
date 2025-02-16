import bannerSlice, {
  getBanners,
  fetchBannersRequest,
  fetchBannersSuccess,
  fetchBannersFailure,
  BannerState,
} from "@/store/slices/banner/bannerSlice";
import { RootState } from "@/store/store";
import { banners } from "@/mock/apiResponse";

describe("bannerSlice", () => {
  describe("actions", () => {
    const previousState: BannerState = {
      data: [],
      loading: false,
      error: null,
    };

    it("should return the initial state", () => {
      expect(bannerSlice(undefined, { type: "unknown" })).toEqual({
        data: [],
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchBannersRequest being updated loading to true", () => {
      const output = bannerSlice(previousState, fetchBannersRequest());

      expect(output).toEqual({
        data: [],
        loading: true,
        error: null,
      });
    });

    it("should handle a fetchBannersSuccess being added Banners and updated loading to false", () => {
      const output = bannerSlice(previousState, fetchBannersSuccess(banners));

      expect(output).toEqual({
        data: banners,
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchBannersFailure being updated error message and loading to false", () => {
      const output = bannerSlice(previousState, fetchBannersFailure("error"));

      expect(output).toEqual({
        data: [],
        loading: false,
        error: "error",
      });
    });
  });

  describe("selectors", () => {
    const mockState = {
      banner: {
        data: banners,
        loading: false,
        error: null,
      },
    } as RootState;

    it("should return banner info", () => {
      expect(getBanners(mockState)).toEqual(mockState.banner.data);
    });
  });
});
