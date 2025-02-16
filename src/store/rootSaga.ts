import { all } from "redux-saga/effects";
import { watchUserSaga } from "./sagas/userSaga";

export default function* rootSaga() {
  yield all([watchUserSaga()]);
}
