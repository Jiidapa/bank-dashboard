import { testSaga } from "redux-saga-test-plan";
import { fetchUserSaga } from "../sagas/userSaga";
import { fetchUserSuccess, fetchUserFailure } from "../slices/user/userSlice";
import { fetchUser } from "@/services/user";

describe("fetchUserSaga", () => {
  it("should handle success case", () => {
    testSaga(fetchUserSaga)
      .next()
      .call(fetchUser)
      .next({
        data: { name: "Clare", greetingMessage: "Have a nice day" },
        success: true,
      })
      .put(
        fetchUserSuccess({ name: "Clare", greetingMessage: "Have a nice day" })
      )
      .next()
      .isDone();
  });

  it("should handle failure case", () => {
    testSaga(fetchUserSaga)
      .next()
      .call(fetchUser)
      .throw(new Error("Failed to fetch user"))
      .put(fetchUserFailure("Failed to fetch user"))
      .next()
      .isDone();
  });
});
