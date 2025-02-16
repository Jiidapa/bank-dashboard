import userSlice, {
  getRecentTransaction,
  fetchRecentTransactionRequest,
  fetchRecentTransactionSuccess,
  fetchRecentTransactionFailure,
  RecentTransactionState,
} from "@/store/slices/recentTransaction/recentTransactionSlice";
import { recentTransactions } from "@/mock/apiResponse";
import { RootState } from "@/store/store";

describe("RecentTransactionSlice", () => {
  describe("actions", () => {
    const previousState: RecentTransactionState = {
      data: [],
      loading: false,
      error: null,
    };

    it("should return the initial state", () => {
      expect(userSlice(undefined, { type: "unknown" })).toEqual({
        data: [],
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchUserRequest being updated loading = true", () => {
      const output = userSlice(previousState, fetchRecentTransactionRequest());
      expect(output).toEqual({
        data: [],
        loading: true,
        error: null,
      });
    });

    it("should handle a fetchUserSuccess being added to a name, greetingMessage and updated loading to false", () => {
      const output = userSlice(
        previousState,
        fetchRecentTransactionSuccess(recentTransactions)
      );

      expect(output).toEqual({
        data: recentTransactions,
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchUserSuccess being added to a name, greetingMessage and updated loading to false", () => {
      const output = userSlice(
        previousState,
        fetchRecentTransactionFailure("error")
      );

      expect(output).toEqual({
        data: [],
        loading: false,
        error: "error",
      });
    });
  });

  describe("selectors", () => {
    const mockState = {
      recentTransaction: {
        data: recentTransactions,
        loading: false,
        error: null,
      },
    } as RootState;

    it("should return user info", () => {
      expect(getRecentTransaction(mockState)).toEqual(
        mockState.recentTransaction.data
      );
    });
  });
});
