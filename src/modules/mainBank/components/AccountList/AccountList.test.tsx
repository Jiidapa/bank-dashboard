import { render } from "@testing-library/react";
import AccountList from "@/modules/mainBank/components/AccountList/AccountList";
import { accounts } from "@/mock/apiResponse";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("AccountList", () => {
  beforeEach(() => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        account: {
          data: accounts,
        },
      })
    );

    jest.clearAllMocks();
  });

  const renderAccountList = () => render(<AccountList />);

  it("should account list with data correctly", () => {
    const { getByText, getAllByText, getAllByRole, getByRole } =
      renderAccountList();

    expect(getByText("Saving Account")).toBeInTheDocument();
    expect(getByText("฿62,000.00")).toBeInTheDocument();
    expect(getByText(/smart account568\-2\-81740\-9/i)).toBeInTheDocument();
    expect(getAllByText("Powered by TestLab")).toHaveLength(2);

    expect(getAllByText("Credit Loan")).toHaveLength(2);
    expect(getByText("฿300.10")).toBeInTheDocument();
    expect(getByText("¥30,000.00")).toBeInTheDocument();
    expect(getByText("Disbursement")).toBeInTheDocument();
    expect(getByText("Overdue")).toBeInTheDocument();

    expect(getByText("Goal Saving Account")).toBeInTheDocument();
    expect(getByText("$30,000.00")).toBeInTheDocument();
    expect(getByText("24")).toBeInTheDocument();
    expect(getByText("%")).toBeInTheDocument();

    expect(getAllByRole("button", { name: "More Action" })).toHaveLength(4);
    expect(
      getByRole("button", {
        name: "Copy account number",
      })
    ).toBeInTheDocument();
    expect(
      getByRole("button", {
        name: "Edit Name and Color",
      })
    ).toBeInTheDocument();

    const addMoreMoneyLinks = getAllByRole("link", { name: "Add money" });
    addMoreMoneyLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "#");
    });
  });
});
