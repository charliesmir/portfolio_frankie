import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ExperienceList } from "./ExperienceList";

const meta = {
  title: "Molecules/ExperienceList",
  component: ExperienceList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExperienceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    experiences: [
      {
        name: "Art teacher, workchor curator",
        place: "International Language Club",
        year: "2022-2023",
      },
      {
        name: "Art teacher, workchor curator",
        place: "International Language Club",
        year: "2022-2023",
      },
      {
        name: "Art teacher, workchor curator",
        place: "International Language Club",
        year: "2022-2023",
      },
      {
        name: "Art teacher, workchor curator",
        place: "International Language Club",
        year: "2022-2023",
      },
    ],
  },
};
