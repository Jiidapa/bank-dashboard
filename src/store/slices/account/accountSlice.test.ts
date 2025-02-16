import AccountSlice, {
  getAccounts,
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
  AccountState,
} from "@/store/slices/account/accountSlice";
import { RootState } from "@/store/store";
import { accounts } from "@/mock/apiResponse";

describe("AccountSlice", () => {
  describe("actions", () => {
    const previousState: AccountState = {
      data: [],
      loading: false,
      error: null,
    };

    it("should return the initial state", () => {
      expect(AccountSlice(undefined, { type: "unknown" })).toEqual({
        data: [],
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchAccountsRequest being updated loading to true", () => {
      const output = AccountSlice(previousState, fetchAccountsRequest());

      expect(output).toEqual({
        data: [],
        loading: true,
        error: null,
      });
    });

    it("should handle a fetchAccountsSuccess being added accounts and updated loading to false", () => {
      const output = AccountSlice(
        previousState,
        fetchAccountsSuccess(accounts)
      );

      expect(output).toEqual({
        data: accounts,
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchAccountsFailure being updated error message and loading to false", () => {
      const output = AccountSlice(previousState, fetchAccountsFailure("error"));

      expect(output).toEqual({
        data: [],
        loading: false,
        error: "error",
      });
    });
  });

  describe("selectors", () => {
    const mockState = {
      account: {
        data: accounts,
        loading: false,
        error: null,
      },
    } as RootState;

    it("should return Account info", () => {
      expect(getAccounts(mockState)).toEqual(mockState.account.data);
    });
  });
});
