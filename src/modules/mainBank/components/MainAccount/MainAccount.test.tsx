import { render } from "@testing-library/react";
import MainAccount from "./MainAccount";
import { useSelector } from "react-redux";
import { accounts } from "@/mock/apiResponse";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("MainAccount", () => {
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

  const renderMainAccount = () => render(<MainAccount />);
  it("Should render main account with correct data", () => {
    const { getByText } = renderMainAccount();

    expect(getByText("Smart account 568-2-81740-9")).toBeInTheDocument();
    expect(getByText("฿62,000.00")).toBeInTheDocument();
    expect(getByText("Powered by TestLab")).toBeInTheDocument();
  });
});
