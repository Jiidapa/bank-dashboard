import { testSaga } from "redux-saga-test-plan";
import { fetchDebitCardsSaga } from "./debitCardSaga";
import {
  fetchDebitCardsSuccess,
  fetchDebitCardsFailure,
} from "../../slices/debitCard/debitCardsSlice";
import { fetchDebitCards } from "@/services/debitCard";
import { debitCards } from "@/mock/apiResponse";

describe("fetchDebitCardsSaga", () => {
  it("should handle success case", () => {
    testSaga(fetchDebitCardsSaga)
      .next()
      .call(fetchDebitCards)
      .next({
        data: debitCards,
        success: true,
      })
      .put(fetchDebitCardsSuccess(debitCards))
      .next()
      .isDone();
  });

  it("should handle failure case", () => {
    testSaga(fetchDebitCardsSaga)
      .next()
      .call(fetchDebitCards)
      .throw(new Error("Failed to fetch DebitCards"))
      .put(fetchDebitCardsFailure("Failed to fetch DebitCards"))
      .next()
      .isDone();
  });
});
