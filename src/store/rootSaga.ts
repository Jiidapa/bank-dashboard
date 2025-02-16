import { all } from "redux-saga/effects";
import { watchUserSaga } from "@/store/sagas/user/userSaga";
import { watchRecentTransactionSaga } from "@/store/sagas/recentTransaction/recentTransactionSaga";

export default function* rootSaga() {
  yield all([watchUserSaga(), watchRecentTransactionSaga()]);
}
