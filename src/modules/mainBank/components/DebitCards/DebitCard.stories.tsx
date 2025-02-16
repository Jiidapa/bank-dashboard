import type { Meta, StoryObj } from "@storybook/react";

import DebitCards from "./DebitCards";
import MockReduxProvider from "@/mock/MockReduxProvider";

const meta: Meta<typeof DebitCards> = {
  title: "MainBank/Components/DebitCards",
  component: DebitCards,
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
type Story = StoryObj<typeof DebitCards>;

export const Default: Story = {
  args: {},
};
