import {
  fetchDebitCardsRequest,
  fetchDebitCardsSuccess,
  fetchDebitCardsFailure,
} from "../../slices/debitCard/debitCardsSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDebitCards } from "@/services/debitCard";
import { DebitCard } from "@/mock/apiResponse";

type DebitCardsResponse = {
  success: boolean;
  data: DebitCard[];
};

export function* fetchDebitCardsSaga() {
  try {
    const response: DebitCardsResponse = yield call(fetchDebitCards);
    yield put(fetchDebitCardsSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchDebitCardsFailure(error.message));
    } else {
      yield put(fetchDebitCardsFailure("An unknown error occurred"));
    }
  }
}

export function* watchDebitCardsSaga() {
  yield takeLatest(fetchDebitCardsRequest.type, fetchDebitCardsSaga);
}
