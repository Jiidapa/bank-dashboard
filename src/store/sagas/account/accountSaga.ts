import {
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
} from "../../slices/account/accountSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchAccounts } from "@/services/account";
import { Account } from "@/mock/apiResponse";

type AccountsResponse = {
  success: boolean;
  data: Account[];
};

export function* fetchAccountsSaga() {
  try {
    const response: AccountsResponse = yield call(fetchAccounts);
    yield put(fetchAccountsSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchAccountsFailure(error.message));
    } else {
      yield put(fetchAccountsFailure("An unknown error occurred"));
    }
  }
}

export function* watchAccountsSaga() {
  yield takeLatest(fetchAccountsRequest.type, fetchAccountsSaga);
}
