import { toTitleCase, getCurrencySymbol } from "./utils";

describe("Main Bank Utils", () => {
  describe("toTitleCase", () => {
    it("should convert kebab-case to title case", () => {
      expect(toTitleCase("saving-account")).toBe("Saving Account");
    });

    it("should handle multiple hyphens", () => {
      expect(toTitleCase("credit-loan-account")).toBe("Credit Loan Account");
    });

    it("should handle single word input", () => {
      expect(toTitleCase("account")).toBe("Account");
    });

    it("should handle already formatted input", () => {
      expect(toTitleCase("Saving Account")).toBe("Saving Account");
    });

    it("should return an empty string for empty input", () => {
      expect(toTitleCase("")).toBe("");
    });
  });

  describe('getCurrencySymbol', () => {
    it('should return the correct symbol for known currencies', () => {
      expect(getCurrencySymbol('THB')).toBe('฿');
      expect(getCurrencySymbol('USD')).toBe('$');
      expect(getCurrencySymbol('JPY')).toBe('¥');
    });

    it('should return the currency code if the symbol is not found', () => {
      expect(getCurrencySymbol('XYZ')).toBe('XYZ');
      expect(getCurrencySymbol('ABC')).toBe('ABC');
    });
  });
})
