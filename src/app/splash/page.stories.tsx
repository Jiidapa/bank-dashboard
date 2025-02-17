import type { Meta, StoryObj } from "@storybook/react";

import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Pages/Splash",
  component: Page,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {},
};
