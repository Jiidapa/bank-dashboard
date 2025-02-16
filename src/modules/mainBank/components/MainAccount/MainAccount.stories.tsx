import type { Meta, StoryObj } from "@storybook/react";

import MainAccount from "./MainAccount";
import MockReduxProvider from "@/mock/MockReduxProvider";

const meta: Meta<typeof MainAccount> = {
  title: "MainBank/Components/MainAccount",
  component: MainAccount,
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
type Story = StoryObj<typeof MainAccount>;

export const Default: Story = {
  args: {},
};
