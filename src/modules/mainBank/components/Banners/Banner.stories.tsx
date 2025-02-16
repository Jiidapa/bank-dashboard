import type { Meta, StoryObj } from "@storybook/react";

import Banners from "./Banners";
import MockReduxProvider from "@/mock/MockReduxProvider";

const meta: Meta<typeof Banners> = {
  title: "MainBank/Components/Banners",
  component: Banners,
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
type Story = StoryObj<typeof Banners>;

export const Default: Story = {
  args: {},
};
