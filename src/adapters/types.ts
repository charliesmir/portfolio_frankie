export interface SanityMain {
  titleSection: {
    name: string;
    surname: string;
    about: string;
    picture: string;
  };
  artworksSection: {
    title: { title: string };
    gallery: { collections: { artwork: string; name: string; slug: string }[] };
  };
  cvSection: {
    title: { title: string };
    info: {
      statement?: string;
      exhibitions?: {
        exhibitions?: {
          name: string;
          place: string;
          year: string;
          link?: string;
        }[];
      };
      education?: {
        educations?: { name: string; place: string; year: string }[];
      };
      experience?: {
        experiences?: { name: string; place: string; year: string }[];
      };
    };
  };
  contactsSection: {
    title: { title: string };
    contacts: {
      contacts: { icon: string; name: string; link: string }[];
    };
  };
}

export interface SanityCollection {
  title: {
    title: string;
    idea: string;
  };

  gallery: {
    artworks: {
      image: string;
      title: string;
      info: string;
      description?: string;
    }[];
  };
}
