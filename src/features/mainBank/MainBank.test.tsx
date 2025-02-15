import MainBank from "./MainBank";
import { render, within } from "@testing-library/react";
import { ComponentProps } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ComponentProps<"img">) => <img {...props} />,
}));

describe("Main Bank", () => {
  const renderMainBank = () => render(<MainBank />);

  it("should render mainBank", () => {
    const { getByRole } = renderMainBank();

    expect(getByRole("link", { name: "Menu" })).toHaveAttribute("href", "#");
    expect(getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it("should render greeting text", () => {
    const { getByText } = renderMainBank();

    expect(getByText("Have a nice day Clare")).toBeInTheDocument();
  });

  describe("Main Account", () => {
    it("should render main account section", () => {
      const { getByTestId } = renderMainBank();

      const mainAccountDetails = getByTestId("main-account-top");
      expect(
        within(mainAccountDetails).getByText("Saving Account")
      ).toBeInTheDocument();
      expect(
        within(mainAccountDetails).getByText("฿62,000.00")
      ).toBeInTheDocument();
      expect(
        within(mainAccountDetails).getByText("Smart account 568-2-81740-9")
      ).toBeInTheDocument();
      expect(
        within(mainAccountDetails).getByText("Powered by TestLab")
      ).toBeInTheDocument();
    });

    it("should render main account links", () => {
      const { getByTestId } = renderMainBank();

      const links = getByTestId("main-account-links");
      expect(
        within(links).getByRole("link", { name: "Withdrawal" })
      ).toHaveAttribute("href", "#");
      expect(
        within(links).getByRole("link", { name: "QR scan" })
      ).toHaveAttribute("href", "#");
      expect(
        within(links).getByRole("link", { name: "Add money" })
      ).toHaveAttribute("href", "#");
    });

    it("should render more action button", () => {
      const { getAllByRole } = renderMainBank();

      expect(getAllByRole("button", { name: "More Action" })).toHaveLength(5);
    });

    it("should render render tooltip main account", () => {
      const { getByTestId } = renderMainBank();

      const tooltip = getByTestId("tooltip-main-account");
      expect(
        within(tooltip).queryByRole("button", { name: "Set main account" })
      ).not.toBeInTheDocument();
      expect(
        within(tooltip).queryByRole("button", { name: "Copy account number" })
      ).not.toBeInTheDocument();
      expect(
        within(tooltip).queryByRole("button", { name: "Edit Name and Color" })
      ).not.toBeInTheDocument();
    });

    it("should render tooltip description", () => {
      const { getByText } = renderMainBank();

      expect(
        getByText(
          /Change your main account for Using transfer, wallet more easliy/i
        )
      );
    });
  });

  describe("Recently Section", () => {
    it("should render recently list", () => {
      const { getByText, getAllByText, getAllByRole } = renderMainBank();

      const recentlyAvatars = getAllByRole("img", { name: "Recently Avatar" });
      expect(recentlyAvatars).toHaveLength(6);

      recentlyAvatars.forEach((avatar) => {
        expect(avatar).toHaveAttribute(
          "src",
          "https://dummyimage.com/54x54/999/fff"
        );
      });

      expect(getAllByText("Emily")).toHaveLength(3);
      expect(getByText("AbcdEfghiJKlmN")).toBeInTheDocument();
      expect(getByText("Jone Kiersten")).toBeInTheDocument();
      expect(getByText("MarkYu Gonzales")).toBeInTheDocument();
    });
  });

  it("should render main make", () => {
    const { getByText } = renderMainBank();

    expect(getByText("Make your Debit Card")).toBeInTheDocument();
    expect(
      getByText("To enjoy 0.5% cash back from online purchase.")
    ).toBeInTheDocument();
    expect(getByText("Make your Debit Card")).not.toBeVisible();
    expect(
      getByText("To enjoy 0.5% cash back from online purchase.")
    ).not.toBeVisible();
  });

  describe("Debit Swipe Section", () => {
    it("should render `My Salary`", () => {
      const { getByTestId, getByText } = renderMainBank();

      expect(getByText("My Salary")).toBeInTheDocument();

      const mySalaryCard = getByTestId("my-salary");
      expect(within(mySalaryCard).getByText("In progress")).toBeInTheDocument();
      expect(
        within(mySalaryCard).getByText("Issued by TestLab")
      ).toBeInTheDocument();
    });

    it("should render first `For My Dream`", () => {
      const { getByTestId } = renderMainBank();

      const foMyDream1 = getByTestId("for-my-dream-1");
      expect(within(foMyDream1).getByText("For My Dream")).toBeInTheDocument();
      expect(within(foMyDream1).getByText("In progress")).toBeInTheDocument();
      expect(
        within(foMyDream1).getByText("Issued by TestLab")
      ).toBeInTheDocument();
    });

    it("should render second `For My Dream`", () => {
      const { getByTestId } = renderMainBank();

      const foMyDream1 = getByTestId("for-my-dream-2");
      expect(within(foMyDream1).getByText("For My Dream")).toBeInTheDocument();
      expect(
        within(foMyDream1).getByText("9440 78•• •••• 3115")
      ).toBeInTheDocument();
      expect(
        within(foMyDream1).getByText("Issued by TestLab")
      ).toBeInTheDocument();
    });

    it("should render third `For My Dream`", () => {
      const { getByTestId } = renderMainBank();

      const foMyDream1 = getByTestId("for-my-dream-3");
      expect(within(foMyDream1).getByText("For My Dream")).toBeInTheDocument();
      expect(
        within(foMyDream1).getByText("9440 78•• •••• 3115")
      ).toBeInTheDocument();
      expect(
        within(foMyDream1).getByText("Issued by TestLab")
      ).toBeInTheDocument();
    });

    it("should render `See all` menu", () => {
      const { getByRole } = renderMainBank();

      expect(getByRole("link", { name: "See all" })).toHaveAttribute(
        "href",
        "#"
      );
    });
  });

  it("should render `Saving Account` card", () => {
    const { getByTestId } = renderMainBank();

    const savingAccountCard = getByTestId("saving-account-card");

    expect(
      within(savingAccountCard).getByText("Saving Account")
    ).toBeInTheDocument();
    expect(
      within(savingAccountCard).getByText("฿8,837,999.00")
    ).toBeInTheDocument();
    expect(
      within(savingAccountCard).getByText("Smart account 568-2-81740-9")
    ).toBeInTheDocument();
    expect(
      within(savingAccountCard).getByText("Powered by TestLab")
    ).toBeInTheDocument();
    expect(
      within(savingAccountCard).getByRole("button", { name: "More Action" })
    ).toBeInTheDocument();
    expect(
      within(savingAccountCard).getByRole("button", {
        name: "Copy account number",
      })
    ).toBeInTheDocument();
    expect(
      within(savingAccountCard).getByRole("button", {
        name: "Edit Name and Color",
      })
    ).toBeInTheDocument();
    expect(
      within(savingAccountCard).getByRole("link", { name: "Add money" })
    ).toHaveAttribute("href", "#");
  });

  it("should render `Credit Loan` card", () => {
    const { getByTestId } = renderMainBank();

    const creditLoanCard = getByTestId("credit-loan-card");
    expect(within(creditLoanCard).getByText("Credit Loan")).toBeInTheDocument();
    expect(within(creditLoanCard).getByText("฿300.100")).toBeInTheDocument();
    expect(
      within(creditLoanCard).getByText("Credit Loan 568-2-81740-9")
    ).toBeInTheDocument();
    expect(
      within(creditLoanCard).getByRole("button", { name: "More Action" })
    ).toBeInTheDocument();
    expect(
      within(creditLoanCard).queryByRole("button", {
        name: "Copy account number",
      })
    ).not.toBeInTheDocument();
    expect(
      within(creditLoanCard).queryByRole("button", {
        name: "Edit Name and Color",
      })
    ).not.toBeInTheDocument();
    expect(
      within(creditLoanCard).getByRole("link", { name: "Disburse" })
    ).toHaveAttribute("href", "#");
  });

  it("should render `Travel New York` card", () => {
    const { getByTestId } = renderMainBank();

    const travelNewYorkCard = getByTestId("travel-new-york-card");
    expect(
      within(travelNewYorkCard).getByText("Travel New York")
    ).toBeInTheDocument();
    expect(
      within(travelNewYorkCard).getByText("฿30,000.00")
    ).toBeInTheDocument();
    expect(
      within(travelNewYorkCard).getByText("Goal driven savings 568-2-81740-9")
    ).toBeInTheDocument();
    expect(
      within(travelNewYorkCard).getByText("Powered by TestLab")
    ).toBeInTheDocument();
    expect(
      within(travelNewYorkCard).getByRole("button", { name: "More Action" })
    ).toBeInTheDocument();
    expect(
      within(travelNewYorkCard).queryByRole("button", {
        name: "Copy account number",
      })
    ).not.toBeInTheDocument();
    expect(
      within(travelNewYorkCard).queryByRole("button", {
        name: "Edit Name and Color",
      })
    ).not.toBeInTheDocument();
    expect(within(travelNewYorkCard).getByText("24")).toBeInTheDocument();
    expect(within(travelNewYorkCard).getByText("%")).toBeInTheDocument();
  });

  it("should render `Need to repay` card", () => {
    const { getByTestId } = renderMainBank();

    const needToRepayCard = getByTestId("need-to-repay-card");
    expect(
      within(needToRepayCard).getByText("Need to repay")
    ).toBeInTheDocument();
    expect(within(needToRepayCard).getByText("฿30,000.00")).toBeInTheDocument();
    expect(
      within(needToRepayCard).getByText("Disbursement")
    ).toBeInTheDocument();
    expect(within(needToRepayCard).getByText("Overdue")).toBeInTheDocument();
    expect(
      within(needToRepayCard).getByText("Credit Loan 568-2-81740-9")
    ).toBeInTheDocument();
    expect(
      within(needToRepayCard).getByText("More Action")
    ).toBeInTheDocument();
    expect(
      within(needToRepayCard).getByRole("button", { name: "More Action" })
    ).toBeInTheDocument();
    expect(
      within(needToRepayCard).queryByRole("button", {
        name: "Copy account number",
      })
    ).not.toBeInTheDocument();
    expect(
      within(needToRepayCard).queryByRole("button", {
        name: "Edit Name and Color",
      })
    ).not.toBeInTheDocument();
    expect(
      within(needToRepayCard).getByRole("link", { name: "Pay" })
    ).toHaveAttribute("href", "#");
  });

  it("should render `Travel New York` card", () => {});

  it("should main product section", () => {
    const { getByText } = renderMainBank();

    expect(getByText("Want some money?")).toBeInTheDocument();
    expect(getByText(/'Clare'/i)).toBeInTheDocument();
  });

  it("should render total balance", () => {
    const { getByRole } = renderMainBank();

    expect(getByRole("link", { name: "Total Balance" })).toHaveAttribute(
      "href",
      "#"
    );
  });
});
