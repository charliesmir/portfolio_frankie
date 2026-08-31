import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CollectionPage } from "./CollectionPage";

const meta = {
  title: "Pages/CollectionPage",
  component: CollectionPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CollectionPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: {
      title: "Dog Days",
      idea: 'The symbolism of a dog differs drastically in different situations. A black dog is a universally recognised symbol of depression - like a hunter\'s dog, a bad omen, ever present. At the same time dogs in art are a metaphor for fidelity, friendship, companionship. Yet here are "the dog days" - the hottest days of the summer, days of exhaustion, forcing everyone to hide in the shade. I explore this complex imagery in this series as a way to express mental health struggles, a blurry line the safety of the familiar and the dangerous pull of depression and melancholy. Our own safe zones can be a sanctuary and a prison at once, our memories can feel nostalgic and painful. Our own minds, like guard dogs, sometimes guarding even from what is actually safe.',
    },
    highlight: {
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
    gallery: {
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
  },
};
