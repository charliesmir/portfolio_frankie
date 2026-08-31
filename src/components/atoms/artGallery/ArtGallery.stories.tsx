import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArtGallery } from "./ArtGallery";

const meta = {
  title: "Atoms/ArtGallery",
  component: ArtGallery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArtGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    artworks: [
      {
        image: "/artworkEx.png",
        title: "Artwork 1",
      },
      {
        image: "/artworkEx.png",
        title: "Artwork 1",
      },
      {
        image: "/pictureEx.png",
        title: "Artwork 1",
      },
      {
        image: "/artworkEx.png",
        title: "Artwork 1",
      },
    ],
    onClick: (index: number) => console.log(`Artwork ${index + 1} clicked`),
  },
};
