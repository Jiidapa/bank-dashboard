import {
  fetchRecentTransactionRequest,
  fetchRecentTransactionSuccess,
  fetchRecentTransactionFailure,
} from "@/store/slices/recentTransaction/recentTransactionSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { RecentTransaction } from "@/mock/apiResponse";
import { fetchRecentTransaction } from "@/services/transaction";

type RecentTransactionResponse = {
  success: boolean;
  data: RecentTransaction[];
};

export function* fetchRecentTransactionSaga() {
  try {
    const response: RecentTransactionResponse = yield call(
      fetchRecentTransaction
    );
    yield put(fetchRecentTransactionSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchRecentTransactionFailure(error.message));
    } else {
      yield put(fetchRecentTransactionFailure("An unknown error occurred"));
    }
  }
}

export function* watchRecentTransactionSaga() {
  yield takeLatest(
    fetchRecentTransactionRequest.type,
    fetchRecentTransactionSaga
  );
}
