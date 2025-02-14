import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pin from "./Pin";
import { ComponentProps } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ComponentProps<"img">) => <img {...props} />,
}));

describe("Pin Page", () => {
  it("should render pin page", () => {
    render(<Pin />);

    expect(screen.getByAltText("avatar")).toHaveAttribute(
      "src",
      "https://dummyimage.com/200x200/999/fff"
    );
    expect(screen.getByText("Interview User")).toBeInTheDocument();
    expect(
      screen.getByText(/Invalid PIN Code\.You have 3 attempt left\./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Invalid PIN Code\.You have 3 attempt left\./i)
    ).not.toBeVisible();
    expect(screen.getByText("Login with ID / Password")).toBeInTheDocument();
    expect(screen.getByText("Powered by TestLab")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
