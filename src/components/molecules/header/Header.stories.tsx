import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Header } from "./Header";

const meta = {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    button: [
      {
        title: "Home",
        onClick: () => {},
        alignment: "center",
        size: "medium",
        status: "active",
      },
      {
        title: "Artworks",
        onClick: () => {},
        alignment: "center",
        size: "medium",
      },
      {
        title: "Cv",
        onClick: () => {},
        alignment: "center",
        size: "medium",
      },
      {
        title: "Contact",
        onClick: () => {},
        alignment: "center",
        size: "medium",
      },
    ],
  },
};
