import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArtCarousel } from "./ArtCarousel";

const meta = {
  title: "Molecules/ArtCarousel",
  component: ArtCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArtCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    card: {
      image: "/artworkEx.png",
      title: "Artwork title",
      info: "Oil on canvas, 2023, 100 x 100 cm",
      description: "Something very interesting about this particular artwork",
    },
    arrow: "/arrow.svg",
    handlePrev: () => alert("Prev clicked"),
    handleNext: () => alert("Next clicked"),
  },
};
