import type { Meta, StoryObj } from "@storybook/react";

import MainBankPage from "./page";
import MockReduxProvider from "@/mock/MockProvider";

const meta: Meta<typeof MainBankPage> = {
  title: "Pages/MainBankPage",
  component: MainBankPage,
  decorators: [
    (Story) => (
      <MockReduxProvider>
        <Story />
      </MockReduxProvider>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainBankPage>;

export const Default: Story = {
  args: {},
};
