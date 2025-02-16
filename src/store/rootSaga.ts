import { all } from "redux-saga/effects";
import { watchUserSaga } from "@/store/sagas/user/userSaga";
import { watchRecentTransactionSaga } from "@/store/sagas/recentTransaction/recentTransactionSaga";
import { watchDebitCardsSaga } from "@/store/sagas/debitCard/debitCardSaga";
import { watchBannersSaga } from "@/store/sagas/banner/bannerSaga";

export default function* rootSaga() {
  yield all([
    watchUserSaga(),
    watchRecentTransactionSaga(),
    watchDebitCardsSaga(),
    watchBannersSaga(),
  ]);
}
