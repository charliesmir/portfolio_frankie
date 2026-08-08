import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./Footer";

const meta = {
  title: "Atoms/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    LastUpdateYear: "2026",
  },
};
