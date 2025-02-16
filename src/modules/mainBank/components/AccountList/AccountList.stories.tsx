import type { Meta, StoryObj } from "@storybook/react";

import AccountList from "./AccountList";
import MockReduxProvider from "@/mock/MockReduxProvider";

const meta: Meta<typeof AccountList> = {
  title: "MainBank/Components/AccountList",
  component: AccountList,
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
type Story = StoryObj<typeof AccountList>;

export const Default: Story = {
  args: {},
};
