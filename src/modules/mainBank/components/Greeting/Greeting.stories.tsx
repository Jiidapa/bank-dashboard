import type { Meta, StoryObj } from "@storybook/react";

import Greeting from "./Greeting";
import MockReduxProvider from "@/mock/MockReduxProvider";

const meta: Meta<typeof Greeting> = {
  title: "MainBank/Components/Greeting",
  component: Greeting,
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
type Story = StoryObj<typeof Greeting>;

export const Default: Story = {
  args: {},
};
