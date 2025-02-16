import type { Meta, StoryObj } from "@storybook/react";

import RecentTransactions from "./RecentTransactions";
import MockReduxProvider from "@/mock/MockReduxProvider";

const meta: Meta<typeof RecentTransactions> = {
  title: "MainBank/Components/RecentTransactions",
  component: RecentTransactions,
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
type Story = StoryObj<typeof RecentTransactions>;

export const Default: Story = {
  args: {},
};
