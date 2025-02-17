import { useRouter } from "next/navigation";
import PrivateRoute from "./PrivateRoute";
import { render } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

let mockRouterPush = jest.fn();

describe("PrivateRoute", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });

    sessionStorage.clear();
  });

  const renderPrivateRoute = () =>
    render(<PrivateRoute>main page</PrivateRoute>);

  it("should redirects to main page if already logged in", () => {
    sessionStorage.setItem("isAuthenticated", "true");

    const { getByText } = renderPrivateRoute();

    expect(getByText("main page")).toBeInTheDocument();
  });

  it("should redirects to pin page if not log in yet", () => {
    sessionStorage.setItem("isAuthenticated", "false");

    const { queryByText } = renderPrivateRoute();

    expect(mockRouterPush).toHaveBeenCalledWith("/splash");
    expect(queryByText("main page")).not.toBeInTheDocument();
  });
});
