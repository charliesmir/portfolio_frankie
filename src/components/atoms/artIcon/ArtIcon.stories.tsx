import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArtIcon } from "./ArtIcon";

const meta = {
  title: "Atoms/ArtIcon",
  component: ArtIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArtIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    artwork: "/artworkEx.png",
    name: "Artwork 1",
    icon: "/look.svg",
    onClick: () => alert("Button clicked"),
  },
};

export const Active: Story = {
  args: {
    artwork: "/artworkEx.png",
    name: "Artwork 1",
    icon: "/look.svg",
    isActive: true,
    onClick: () => alert("Button clicked"),
  },
};
