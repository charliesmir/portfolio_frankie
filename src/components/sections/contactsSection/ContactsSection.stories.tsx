import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ContactsSection } from "./ContactsSection";

const meta = {
  title: "Sections/ContactsSection",
  component: ContactsSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: {
      alignment: "right",
      color: "onPrimary",
      title: "Contacts",
    },
    contacts: {
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
  },
};
