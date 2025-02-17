import { render, waitFor } from "@testing-library/react";
import Splash from "./page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Splash Screen Page", () => {
  const renderSplash = () => render(<Splash />);

  it("should redirect to /pin after 1 second", async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    const { getByTestId } = renderSplash();

    expect(getByTestId("splash-screen")).toBeInTheDocument();

    await waitFor(() => expect(push).toHaveBeenCalledWith("/pin"), {
      timeout: 1100,
    });
  });

  it("should clear the timeout on unmount", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    const { unmount } = renderSplash();

    unmount();

    expect(push).not.toHaveBeenCalled();
  });
});
