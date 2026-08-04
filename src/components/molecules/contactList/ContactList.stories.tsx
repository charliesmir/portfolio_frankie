import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ContactList } from "./ContactList";
import type { ContactListProps } from "./ContactList";

const meta = {
  title: "Molecules/ContactList",
  component: ContactList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    contacts: [
      {
        name: "@atlantis_fall",
        icon: "/instagram.svg",
        link: "https://www.instagram.com/atlantis_fall/",
      },
      {
        name: "@atlantis_fall",
        icon: "/instagram.svg",
        link: "https://www.instagram.com/atlantis_fall/",
      },
      {
        name: "@atlantis_fall",
        icon: "/instagram.svg",
        link: "https://www.instagram.com/atlantis_fall/",
      },
      {
        name: "@atlantis_fall",
        icon: "/instagram.svg",
        link: "https://www.instagram.com/atlantis_fall/",
      },
    ],
  },
};
