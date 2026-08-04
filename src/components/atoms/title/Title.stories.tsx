import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Title } from "./Title";

const meta = {
  title: "Atoms/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Artworks: Story = {
  args: {
    alignment: "right",
    color: "Default",
    title: "Artworks",
  },
};

export const CV: Story = {
  args: {
    alignment: "left",
    color: "Default",
    title: "CV",
  },
};

export const Contacts: Story = {
  args: {
    alignment: "right",
    color: "onPrimary",
    title: "Contacts",
  },
};
