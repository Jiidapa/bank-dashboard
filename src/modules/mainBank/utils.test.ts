import { toTitleCase } from "./utils";

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
