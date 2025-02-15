import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pin from "./Pin";
import { ComponentProps } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ComponentProps<"img">) => <img {...props} />,
}));

describe("Pin Page", () => {
  it("should render pin page", () => {
    const { getByAltText, getByText } = render(<Pin />);

    expect(getByAltText("avatar")).toHaveAttribute(
      "src",
      "https://dummyimage.com/200x200/999/fff"
    );
    expect(getByText("Interview User")).toBeInTheDocument();
    expect(
      getByText(/Invalid PIN Code\.You have 3 attempt left\./i)
    ).toBeInTheDocument();
    expect(
      getByText(/Invalid PIN Code\.You have 3 attempt left\./i)
    ).not.toBeVisible();
    expect(getByText("Login with ID / Password")).toBeInTheDocument();
    expect(getByText("Powered by TestLab")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("6")).toBeInTheDocument();
    expect(getByText("7")).toBeInTheDocument();
    expect(getByText("8")).toBeInTheDocument();
    expect(getByText("9")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();
    expect(getByText("Delete")).toBeInTheDocument();
  });
});
