import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SectionList } from "./sectionList";

const meta = {
  title: "Molecules/SectionList",
  component: SectionList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    sections: [
      {
        alignment: "right",
        hasIcon: false,
        size: "large",
        title: "Statement",
        status: "active",
        onClick: () => alert("Button clicked"),
      },
      {
        alignment: "right",
        hasIcon: false,
        size: "large",
        title: "Exhibitions",
        onClick: () => alert("Button clicked"),
      },
      {
        alignment: "right",
        hasIcon: false,
        size: "large",
        title: "Education",
        onClick: () => alert("Button clicked"),
      },
      {
        alignment: "right",
        hasIcon: false,
        size: "large",
        title: "Experience",
        onClick: () => alert("Button clicked"),
      },
    ],
  },
};
