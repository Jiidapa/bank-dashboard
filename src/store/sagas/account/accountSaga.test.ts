import { testSaga } from "redux-saga-test-plan";
import { fetchAccountsSaga } from "./accountSaga";
import {
  fetchAccountsSuccess,
  fetchAccountsFailure,
} from "../../slices/account/accountSlice";
import { fetchAccounts } from "@/services/account";
import { accounts } from "@/mock/apiResponse";

describe("fetchAccountsSaga", () => {
  it("should handle success case", () => {
    testSaga(fetchAccountsSaga)
      .next()
      .call(fetchAccounts)
      .next({
        data: accounts,
        success: true,
      })
      .put(fetchAccountsSuccess(accounts))
      .next()
      .isDone();
  });

  it("should handle failure case", () => {
    testSaga(fetchAccountsSaga)
      .next()
      .call(fetchAccounts)
      .throw(new Error("Failed to fetch accounts"))
      .put(fetchAccountsFailure("Failed to fetch accounts"))
      .next()
      .isDone();
  });
});
