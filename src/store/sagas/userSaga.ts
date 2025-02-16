import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "../slices/user/userSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUser } from "@/services/user";

type UserResponse = {
  success: boolean;
  data: {
    name: string;
    greetingMessage: string;
  };
};

export function* fetchUserSaga() {
  try {
    const response: UserResponse = yield call(fetchUser);
    yield put(
      fetchUserSuccess({
        name: response.data.name,
        greetingMessage: response.data.greetingMessage,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUserFailure(error.message));
    } else {
      yield put(fetchUserFailure("An unknown error occurred"));
    }
  }
}

export function* watchUserSaga() {
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}
