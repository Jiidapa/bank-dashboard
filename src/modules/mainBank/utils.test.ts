import { toTitleCase, getCurrencySymbol, formatAccountAmount } from "./utils";

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

  describe("getCurrencySymbol", () => {
    it("should return the correct symbol for known currencies", () => {
      expect(getCurrencySymbol("THB")).toBe("฿");
      expect(getCurrencySymbol("USD")).toBe("$");
      expect(getCurrencySymbol("JPY")).toBe("¥");
    });

    it("should return the currency code if the symbol is not found", () => {
      expect(getCurrencySymbol("XYZ")).toBe("XYZ");
      expect(getCurrencySymbol("ABC")).toBe("ABC");
    });
  });

  describe("formatAccountAmount", () => {
    it("should format amounts correctly with currency symbols", () => {
      expect(formatAccountAmount("THB", 1234567)).toBe("฿1,234,567.00");
      expect(formatAccountAmount("USD", 98765.4)).toBe("$98,765.40");
    });

    it("should handle zero values correctly", () => {
      expect(formatAccountAmount("THB", 0)).toBe("฿0.00");
      expect(formatAccountAmount("USD", 0)).toBe("$0.00");
    });

    it("should handle unknown currencies by returning the currency code", () => {
      expect(formatAccountAmount("XYZ", 1234.5)).toBe("XYZ1,234.50");
    });

    it("should correctly round to two decimal places", () => {
      expect(formatAccountAmount("USD", 12.999)).toBe("$13.00");
      expect(formatAccountAmount("THB", 45.555)).toBe("฿45.56");
    });
  });
});
