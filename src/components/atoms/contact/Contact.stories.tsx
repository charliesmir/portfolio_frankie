import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Contact } from "./Contact";

const meta = {
  title: "Atoms/Contact",
  component: Contact,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "@atlantis_fall",
    icon: "/instagram.svg",
    link: "https://www.instagram.com/atlantis_fall/",
  },
};
