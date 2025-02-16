import userSlice, {
  getUser,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  UserState,
} from "@/store/slices/user/userSlice";
import { RootState } from "@/store/store";

const name = "Clare";
const greetingMessage = "Have a nice day";

describe("userSlice", () => {
  describe("actions", () => {
    const previousState: UserState = {
      name: "",
      greetingMessage: "",
      loading: false,
      error: null,
    };

    it("should return the initial state", () => {
      expect(userSlice(undefined, { type: "unknown" })).toEqual({
        name: "",
        greetingMessage: "",
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchUserRequest being updated loading = true", () => {
      const output = userSlice(previousState, fetchUserRequest());
      expect(output).toEqual({
        name: "",
        greetingMessage: "",
        loading: true,
        error: null,
      });
    });

    it("should handle a fetchUserSuccess being added to a name, greetingMessage and updated loading to false", () => {
      const output = userSlice(
        previousState,
        fetchUserSuccess({ name, greetingMessage })
      );

      expect(output).toEqual({
        name,
        greetingMessage,
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchUserFailure being updated error message and loading to false", () => {
      const output = userSlice(previousState, fetchUserFailure("error"));

      expect(output).toEqual({
        name: "",
        greetingMessage: "",
        loading: false,
        error: "error",
      });
    });
  });

  describe("selectors", () => {
    const mockState = {
      user: {
        name,
        greetingMessage,
        loading: false,
        error: null,
      },
    } as RootState;

    it("should return user info", () => {
      expect(getUser(mockState)).toEqual(mockState.user);
    });
  });
});
