import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { EducationList } from "./EducationList";

const meta = {
  title: "Molecules/EducationList",
  component: EducationList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EducationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    educations: [
      {
        name: "Bachelor's degree",
        place: "Novia UAS",
        year: "2020-2022",
      },
      {
        name: "Bachelor's degree",
        place: "Novia UAS",
        year: "2020-2022",
      },

      {
        name: "Bachelor's degree",
        place: "Novia UAS",
        year: "2020-2022",
      },
    ],
  },
};
