import { render } from "@testing-library/react";
import StoreProvider from "./StoreProvider";

describe("StoreProvider", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <StoreProvider>
        <div>Hello World</div>
      </StoreProvider>
    );

    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
