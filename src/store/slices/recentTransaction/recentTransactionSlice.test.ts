import recentTransactionSlice, {
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
      expect(recentTransactionSlice(undefined, { type: "unknown" })).toEqual({
        data: [],
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchRecentTransactionRequest being updated loading = true", () => {
      const output = recentTransactionSlice(previousState, fetchRecentTransactionRequest());
      expect(output).toEqual({
        data: [],
        loading: true,
        error: null,
      });
    });

    it("should handle a fetchRecentTransactionSuccess being added to a name, greetingMessage and updated loading to false", () => {
      const output = recentTransactionSlice(
        previousState,
        fetchRecentTransactionSuccess(recentTransactions)
      );

      expect(output).toEqual({
        data: recentTransactions,
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchRecentTransactionSuccess being added to a name, greetingMessage and updated loading to false", () => {
      const output = recentTransactionSlice(
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

    it("should return recent transactions info", () => {
      expect(getRecentTransaction(mockState)).toEqual(
        mockState.recentTransaction.data
      );
    });
  });
});
