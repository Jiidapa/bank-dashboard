import { testSaga } from "redux-saga-test-plan";
import { fetchRecentTransactionSaga } from "./recentTransactionSaga";
import {
  fetchRecentTransactionSuccess,
  fetchRecentTransactionFailure,
} from "@/store/slices/recentTransaction/recentTransactionSlice";
import { recentTransactions } from "@/mock/apiResponse";
import { fetchRecentTransaction } from "@/services/transaction";

describe("fetchUserSaga", () => {
  it("should handle success case", () => {
    testSaga(fetchRecentTransactionSaga)
      .next()
      .call(fetchRecentTransaction)
      .next({
        data: recentTransactions,
        success: true,
      })
      .put(fetchRecentTransactionSuccess(recentTransactions))
      .next()
      .isDone();
  });

  it("should handle failure case", () => {
    testSaga(fetchRecentTransactionSaga)
      .next()
      .call(fetchRecentTransaction)
      .throw(new Error("Failed to fetch recent transaction"))
      .put(fetchRecentTransactionFailure("Failed to fetch recent transaction"))
      .next()
      .isDone();
  });
});
