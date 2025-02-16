import type { Meta, StoryObj } from "@storybook/react";

import PinPage from "./page";
import MockReduxProvider from "@/mock/MockReduxProvider";

const meta: Meta<typeof PinPage> = {
  title: "Pages/Pin",
  component: PinPage,
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
type Story = StoryObj<typeof PinPage>;

export const Default: Story = {
  args: {},
};
