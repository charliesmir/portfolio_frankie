import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CollectionGallery } from "./CollectionGallery";

const meta = {
  title: "Molecules/CollectionGallery",
  component: CollectionGallery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CollectionGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    collections: [
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        isActive: true,
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
      {
        name: "Collection 1",
        artwork: "/artworkEx.png",
        onClick: () => {},
      },
    ],
    onClick: (index: number) => alert(`Collection ${index + 1} clicked`),
  },
};
