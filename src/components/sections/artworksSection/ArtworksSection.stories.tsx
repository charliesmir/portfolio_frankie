import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArtworksSection } from "./ArtworksSection";

const meta = {
  title: "Sections/ArtworksSection",
  component: ArtworksSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArtworksSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: {
      alignment: "right",
      color: "Default",
      title: "Artworks",
    },
    preview: {
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
    gallery: {
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
  },
};
