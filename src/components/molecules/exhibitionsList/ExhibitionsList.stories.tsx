import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ExhibitionsList } from "./ExhibitionsList";

const meta = {
  title: "Molecules/ExhibitionsList",
  component: ExhibitionsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExhibitionsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    exhibitions: [
      {
    name: "Celebrating variety",
    place: "Gallery Bla Bla Bla, Helsinki",
    year: "2023",
    link: "https://frnkwho.crevado.com/cv",
  },

  {
    name: "Realm of Fine Arts",
    place: "Gallery Bla, Mänttä",
    year: "2022",
  },
{
    name: "Celebrating variety",
    place: "Gallery Bla Bla Bla, Helsinki",
    year: "2023",
    link: "https://frnkwho.crevado.com/cv",
  },

  {
    name: "Realm of Fine Arts",
    place: "Gallery Bla, Mänttä",
    year: "2022",
  },

    ],
  },
};
