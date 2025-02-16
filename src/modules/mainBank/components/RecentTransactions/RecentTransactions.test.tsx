import RecentTransactions from "./RecentTransactions";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { recentTransactions } from "@/mock/apiResponse";
import { ComponentProps } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ComponentProps<"img">) => <img {...props} />,
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("RecentTransactions", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        recentTransaction: {
          data: recentTransactions,
          loading: false,
          error: null,
        },
      })
    );

    jest.clearAllMocks();
  });

  const renderRecentTransactions = () => render(<RecentTransactions />);

  it("should render recent transactions", () => {
    const { getByText, getAllByRole } = renderRecentTransactions();

    expect(getByText("Emily")).toBeInTheDocument();
    expect(getByText("Jone Kiersten")).toBeInTheDocument();

    const avatars = getAllByRole("img", { name: "Recent Transactions Avatar" });
    expect(avatars).toHaveLength(2);
    expect(avatars[0]).toHaveAttribute("src", recentTransactions[0].image);
    expect(avatars[1]).toHaveAttribute("src", recentTransactions[1].image);
  });

  it("should call fetchRecentTransactionRequest 1 time", () => {
    const { rerender } = renderRecentTransactions();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: "recentTransaction/fetchRecentTransactionRequest",
    });

    rerender(<RecentTransactions />);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
