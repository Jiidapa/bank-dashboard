import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pin from "./Pin";
import { ComponentProps } from "react";
import { useRouter } from "next/navigation";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ComponentProps<"img">) => <img {...props} />,
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

let mockRouterPush = jest.fn();

describe("Pin Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
  });

  const renderPinPage = () => render(<Pin />);

  it("should render pin page", () => {
    const { getByAltText, getByText, getByRole } = renderPinPage();

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
    expect(getByRole("img", { name: "backspace" })).toBeInTheDocument();
  });

  describe("Enter Pin", () => {
    it("should navigate to main page after 6 digits", () => {
      const { getByRole } = renderPinPage();

      fireEvent.click(getByRole("button", { name: "1" }));
      fireEvent.click(getByRole("button", { name: "2" }));
      fireEvent.click(getByRole("button", { name: "3" }));
      fireEvent.click(getByRole("button", { name: "4" }));
      fireEvent.click(getByRole("button", { name: "5" }));
      fireEvent.click(getByRole("button", { name: "6" }));

      expect(mockRouterPush).toHaveBeenCalledWith("/");
    });

    it("should not navigate to main page if pin is not 6 digits", () => {
      const { getByRole } = renderPinPage();

      fireEvent.click(getByRole("button", { name: "1" }));
      fireEvent.click(getByRole("button", { name: "2" }));
      fireEvent.click(getByRole("button", { name: "3" }));

      expect(mockRouterPush).not.toHaveBeenCalled();
    });
  });
});
