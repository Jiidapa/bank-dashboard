import { render } from "@testing-library/react";
import Banners from "@/modules/mainBank/components/Banners/Banners";
import { useDispatch, useSelector } from "react-redux";
import { banners } from "@/mock/apiResponse";

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
        banner: {
          data: banners,
        },
      })
    );

    jest.clearAllMocks();
  });

  const renderBanner = () => render(<Banners />);

  it("should render banners correctly", () => {
    const { getByText } = renderBanner();

    expect(getByText("Want some money?")).toBeInTheDocument();
    expect(getByText(/You can start apply 'Clare'/i)).toBeInTheDocument();
  });

  it("should call fetchUserRequest 1 time", () => {
    const { rerender } = renderBanner();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: "banner/fetchBannersRequest",
    });

    rerender(<Banners />);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
