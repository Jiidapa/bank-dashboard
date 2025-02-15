import type { Meta, StoryObj } from "@storybook/react";

import MainBankPage from "./page";

const meta: Meta<typeof MainBankPage> = {
  title: "Pages/MainBankPage",
  component: MainBankPage,
};

export default meta;
type Story = StoryObj<typeof MainBankPage>;

export const Default: Story = {
  args: {},
};
