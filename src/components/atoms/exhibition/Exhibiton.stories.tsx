import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Exhibition } from "./Exhibition";

const meta = {
  title: "Atoms/Exhibition",
  component: Exhibition,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Exhibition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLink: Story = {
  args: {
    name: "Celebrating variety",
    place: "Gallery Bla Bla Bla, Helsinki",
    year: "2023",
    link: "https://frnkwho.crevado.com/cv",
  },
};

export const NoLink: Story = {
  args: {
    name: "Realm of Fine Arts",
    place: "Gallery Bla, Mänttä",
    year: "2022",
  },
};
