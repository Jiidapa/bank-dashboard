import type { Meta, StoryObj } from "@storybook/react";

import PinPage from "./page";

const meta: Meta<typeof PinPage> = {
  title: "Pages/Pin",
  component: PinPage,
};

export default meta;
type Story = StoryObj<typeof PinPage>;

export const Default: Story = {
  args: {},
};
