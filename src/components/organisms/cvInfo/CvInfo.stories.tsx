import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CvInfo } from "./CvInfo";

const meta = {
  title: "Organisms/CvInfo",
  component: CvInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CvInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Statement: Story = {
  args: {
    content: "Statement",
    statement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, est ac dignissim pulvinar, leo lacus imperdiet dui, ut convallis neque lectus ac orci. Fusce vitae eros cursus, iaculis sem eget, laoreet diam. Nam varius, diam in fringilla auctor, felis risus lobortis augue, congue lacinia turpis erat sed augue. Ut erat ante, semper non bibendum quis, placerat eu massa. Praesent ut lectus quis orci varius placerat. Etiam orci justo, gravida id ultrices sagittis, finibus vitae magna. Nullam blandit eros et aliquet dapibus. Proin at risus eu orci aliquet euismod. Phasellus iaculis iaculis lectus feugiat mattis. Aenean ultrices risus metus, id posuere tortor aliquam a. Maecenas eget quam hendrerit, mattis turpis rutrum, mollis diam. Quisque id massa malesuada, ornare massa ac, feugiat est. \nDonec dapibus lorem quis fringilla sagittis. Vivamus quis dolor sed libero rhoncus tincidunt non nec mi. Morbi leo quam, bibendum a viverra vel, gravida sed urna. Praesent tristique aliquet lacus eu aliquam. Morbi euismod lectus eu lorem tincidunt, a interdum velit condimentum. Integer vel quam quis lacus facilisis interdum et et dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum nisl nunc, tincidunt eget hendrerit et, fringilla in dolor. Nulla odio nisl, venenatis id metus sollicitudin, consequat condimentum massa.\nDonec scelerisque bibendum sem ac laoreet. Vivamus maximus mollis lobortis. Duis ac faucibus dui. Donec dignissim, dui ut ullamcorper rhoncus, nisl diam faucibus turpis, at posuere ipsum ex ut nulla. Aenean at mi scelerisque, laoreet elit quis, viverra nibh. Nam varius a magna at porta. Vivamus iaculis dolor in libero tincidunt mollis. Phasellus quis molestie nisi. Donec lectus neque, fringilla et dictum nec, rutrum non mauris. Nunc sed sodales erat, ut sodales velit. Donec feugiat, est ut consectetur interdum, nisl sapien mattis ex, ut laoreet diam neque eu dui. Mauris condimentum eros dolor, ac ullamcorper felis mollis sit amet. Nullam eleifend mauris sit amet interdum dapibus.",
  },
};

export const Exhibitions: Story = {
  args: {
    content: "Exhibitions",
    exhibitions: {
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
  },
};

export const Education: Story = {
  args: {
    content: "Education",
    education: {
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
  },
};

export const Experience: Story = {
  args: {
    content: "Experience",
    experience: {
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
  },
};
