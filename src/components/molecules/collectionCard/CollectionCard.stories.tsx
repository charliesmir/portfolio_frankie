import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CollectionCard } from "./CollectionCard";

const meta = {
  title: "Molecules/CollectionCard",
  component: CollectionCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CollectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Artwork Title",
    artwork: "/artworkEx.png",
    button: {
      title: "more",
      size: "small",
      alignment: "center",
      hasIcon: true,
      icon: "/arrow_forward.svg",
      onClick: () => alert("Button clicked"),
    },
  },
};
