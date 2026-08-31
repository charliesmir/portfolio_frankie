export const mainQuery = `{
  "titleSection": *[_type == "titleSection"][0] {
    "name": title,
    surname,
    about,
    "picture": image.asset->url + "?auto=format"
  },

  "artworksSection": *[_type == "artworksSection"][0] {
    "title": {
      "title": title
    },
    "gallery": {
      "collections": collections[]-> {
        name,
        "artwork": artworks[0]->image.asset->url + "?auto=format",
        "slug": slug.current,
      }
    }
  },

  "cvSection": *[_type == "cvSection"][0] {
    "title": {
      "title": title
    },

    "info": {
      statement,

      "exhibitions": {
        "exhibitions": exhibitions[] {
          name,
          place,
          "year": years,
          link
        }
      },

      "education": {
        "educations": educations[] {
          name,
          place,
          "year": years
        }
      },

      "experience": {
        "experiences": experiences[] {
          name,
          place,
          "year": years
        }
      }
    }
  },

  "contactsSection": *[_type == "contactsSection"][0] {
    "title": {
      "title": title
    },

    "contacts": {
      "contacts": contacts[] {
        name,
        link,
        "icon": icon.asset->url 
      }
    }
  }
}`;

export const collectionQuery = `
  *[_type == "collection" && slug.current == $slug][0] {
    "title": {
      "title": name,
      "idea": description
    },
    "slug": slug.current,
    "gallery": {
      "artworks": artworks[]-> {
        "image": image.asset->url + "?auto=format",
        "title": name,
        info,
        description
      }
    }
  }
`;
