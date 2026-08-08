import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArtCard } from "./ArtCard";

const meta = {
  title: "Atoms/ArtCard",
  component: ArtCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArtCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    image: "/artworkEx.png",
    title: "Artwork title",
    info: "Oil on canvas, 2023, 100 x 100 cm",
    description: "Something very interesting about this particular artwork",
  },
};
