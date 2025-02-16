import { render } from "@testing-library/react";
import Greeting from "@/modules/mainBank/components/Greeting";
import { useDispatch, useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Greeting", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        user: { name: "Clare", greetingMessage: "Have a nice day" },
      })
    );

    jest.clearAllMocks();
  });

  const renderGreeting = () => render(<Greeting />);

  it("should render greeting text", () => {
    const { getByText } = renderGreeting();

    expect(getByText("Have a nice day Clare")).toBeInTheDocument();
  });

  it("should call fetchUserRequest 1 time", () => {
    const { rerender } = renderGreeting();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: "user/fetchUserRequest",
    });

    rerender(<Greeting />);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
