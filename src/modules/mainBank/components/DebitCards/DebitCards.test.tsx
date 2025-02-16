import DebitCards from "@/modules/mainBank/components/DebitCards/DebitCards";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { debitCards } from "@/mock/apiResponse";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("DebitCards", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        debitCard: {
          data: debitCards,
        },
      })
    );

    jest.clearAllMocks();
  });

  const renderDebitCards = () => render(<DebitCards />);

  it("should debit cards with data correctly", () => {
    const { getByText, getAllByText } = renderDebitCards();

    expect(getByText("My Salary")).toBeInTheDocument();
    expect(getByText("For My Dream")).toBeInTheDocument();
    expect(getAllByText("In progress")).toHaveLength(2);
    expect(getByText("My Debit card")).toBeInTheDocument();
    expect(getAllByText(/Issued by TestLab/i)).toHaveLength(3);
    expect(getByText("9440 78•• •••• 3115")).toBeInTheDocument();
  });

  it("should call fetchUserRequest 1 time", () => {
    const { rerender } = renderDebitCards();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: "debitCard/fetchDebitCardsRequest",
    });

    rerender(<DebitCards />);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
