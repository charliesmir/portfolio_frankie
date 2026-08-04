import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Education } from "./Education";

const meta = {
  title: "Atoms/Education",
  component: Education,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Education>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Bachelor's degree",
    place: "Novia UAS",
    year: "2020-2022",
  },
};
