import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TitleSection } from "./TitleSection";

const meta = {
  title: "Sections/TitleSection",
  component: TitleSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TitleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Frankie",
    surname: "Sleptsov",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    picture: "/pictureEx.png",
  },
};
