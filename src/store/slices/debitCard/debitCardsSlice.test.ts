import debitCardSlice, {
  getDebitCards,
  fetchDebitCardsRequest,
  fetchDebitCardsSuccess,
  fetchDebitCardsFailure,
  DebitCardsState,
} from "@/store/slices/debitCard/debitCardsSlice";
import { debitCards } from "@/mock/apiResponse";
import { RootState } from "@/store/store";

describe("DebitCardsSlice", () => {
  describe("actions", () => {
    const previousState: DebitCardsState = {
      data: [],
      loading: false,
      error: null,
    };

    it("should return the initial state", () => {
      expect(debitCardSlice(undefined, { type: "unknown" })).toEqual({
        data: [],
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchDebitCardsRequest being updated loading to true", () => {
      const output = debitCardSlice(previousState, fetchDebitCardsRequest());
      expect(output).toEqual({
        data: [],
        loading: true,
        error: null,
      });
    });

    it("should handle a fetchDebitCardsSuccess being added debit cards value and updated loading to false", () => {
      const output = debitCardSlice(
        previousState,
        fetchDebitCardsSuccess(debitCards)
      );

      expect(output).toEqual({
        data: debitCards,
        loading: false,
        error: null,
      });
    });

    it("should handle a fetchDebitCardsFailure being added to a name, greetingMessage and updated loading to false", () => {
      const output = debitCardSlice(
        previousState,
        fetchDebitCardsFailure("error")
      );

      expect(output).toEqual({
        data: [],
        loading: false,
        error: "error",
      });
    });
  });

  describe("selectors", () => {
    const mockState = {
      debitCard: {
        data: debitCards,
        loading: false,
        error: null,
      },
    } as RootState;

    it("should return debit cards info", () => {
      expect(getDebitCards(mockState)).toEqual(mockState.debitCard.data);
    });
  });
});
