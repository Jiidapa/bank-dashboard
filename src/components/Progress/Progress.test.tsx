import Progress from "@/components/Progress/Progress";
import { render } from "@testing-library/react";

describe("Progress", () => {
  it("renders % correctly", () => {
    const { getByText } = render(<Progress percent={30} />);

    expect(getByText("30")).toBeInTheDocument();
    expect(getByText("%")).toBeInTheDocument();
  });
});
