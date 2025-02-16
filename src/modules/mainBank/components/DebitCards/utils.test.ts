import { maskNumber } from "./utils";

describe("maskNumber", () => {
  it("should mask the middle six digits of a number", () => {
    expect(maskNumber("9440 7841 2222 3115")).toBe("9440 78•• •••• 3115");
  });
});
