import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    status: "active",
    alignment: "center",
    hasIcon: false,
    size: "medium",
    title: "Primary",
    onClick: () => alert("Button clicked"),
  },
};

export const Small: Story = {
  args: {
    alignment: "center",
    hasIcon: true,
    icon: "/arrow_forward.svg",
    size: "small",
    title: "Button",
    onClick: () => alert("Button clicked"),
  },
};

export const Large: Story = {
  args: {
    alignment: "right",
    hasIcon: false,
    size: "large",
    title: "Button",
    onClick: () => alert("Button clicked"),
  },
};
