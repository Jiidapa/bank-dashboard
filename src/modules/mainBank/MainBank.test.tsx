import MainBank from "./MainBank";
import { render, within } from "@testing-library/react";
import { ComponentProps } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accounts, banners, debitCards } from "@/mock/apiResponse";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ComponentProps<"img">) => (
    <img
      alt={props.alt}
      src={props.src}
      width={props.width}
      height={props.height}
    />
  ),
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Main Bank", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        user: { name: "Clare", greetingMessage: "Have a nice day" },
        recentTransaction: {
          data: [
            {
              name: "Emily",
              image: "https://dummyimage.com/54x54/999/fff",
              isBank: false,
            },
            {
              name: "AbcdEfghiJKlmN",
              image: "https://dummyimage.com/54x54/999/fff",
              isBank: false,
            },
            {
              name: "Jone Kiersten",
              image: "https://dummyimage.com/54x54/999/fff",
              isBank: false,
            },
            {
              name: "Emily",
              image: "https://dummyimage.com/54x54/999/fff",
              isBank: false,
            },
            {
              name: "Emily",
              image: "https://dummyimage.com/54x54/999/fff",
              isBank: false,
            },
            {
              name: "MarkYu Gonzales",
              image: "https://dummyimage.com/54x54/999/fff",
              isBank: false,
            },
          ],
        },
        debitCard: {
          data: debitCards,
        },
        banner: {
          data: banners,
        },
        account: {
          data: accounts,
        },
      })
    );
  });

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

  describe("Recent Transactions Section", () => {
    it("should render recent transactions list", () => {
      const { getByText, getAllByText, getAllByRole } = renderMainBank();

      const recentTransactionAvatars = getAllByRole("img", {
        name: "Recent Transactions Avatar",
      });
      expect(recentTransactionAvatars).toHaveLength(6);

      recentTransactionAvatars.forEach((avatar) => {
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

      const mySalaryCard = getByTestId("debit-card-0");
      expect(within(mySalaryCard).getByText("In progress")).toBeInTheDocument();
      expect(
        within(mySalaryCard).getByText("Issued by TestLab")
      ).toBeInTheDocument();
    });

    it("should render first `For My Dream`", () => {
      const { getByTestId } = renderMainBank();

      const foMyDream1 = getByTestId("debit-card-1");
      expect(within(foMyDream1).getByText("For My Dream")).toBeInTheDocument();
      expect(within(foMyDream1).getByText("In progress")).toBeInTheDocument();
      expect(
        within(foMyDream1).getByText("Issued by TestLab")
      ).toBeInTheDocument();
    });

    it("should render first `My Debit card`", () => {
      const { getByTestId } = renderMainBank();

      const foMyDream1 = getByTestId("debit-card-2");
      expect(within(foMyDream1).getByText("My Debit card")).toBeInTheDocument();
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

  it("should render total balance", () => {
    const { getByRole } = renderMainBank();

    expect(getByRole("link", { name: "Total Balance" })).toHaveAttribute(
      "href",
      "#"
    );
  });

  it("should call fetchAccountsRequest 1 time", () => {
    renderMainBank();

    expect(mockDispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: "account/fetchAccountsRequest",
    });
  });
});
