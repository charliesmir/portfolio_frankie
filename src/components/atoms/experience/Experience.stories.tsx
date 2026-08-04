import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Experience } from "./Experience";

const meta = {
  title: "Atoms/Experience",
  component: Experience,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Art teacher, workchor curator",
    place: "International Language Club",
    year: "2022-2023",
  },
};
