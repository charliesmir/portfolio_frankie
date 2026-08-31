import { sanityClient } from "./clients/sanity";
import { mainQuery, collectionQuery } from "./queries";
import { SanityMain, SanityCollection } from "./types";

export const adapters = {
  cms: () => {
    return {
      getSanityMain: async (): Promise<SanityMain | null> => {
        try {
          const result = (await sanityClient.fetch(mainQuery)) as SanityMain;
          console.log(result);
          console.log("I am getMain from Sanity");
          return result;
        } catch (error) {
          console.error("Failed to fetch main Sanity:", error);
          return null;
        }
      },
      getSanityCollection: async (
        slug: string,
      ): Promise<SanityCollection | null> => {
        try {
          const result = await sanityClient.fetch(collectionQuery, {
            slug,
          });
          const highlightsArray = result.flag?.highlights || [];

          const formattedHighlights = highlightsArray
            .map((block: any) => {
              if (block._type === "block" && block.listItem === "bullet") {
                const text =
                  block.children?.map((child: any) => child.text).join("") ||
                  "";
                return `• ${text}`;
              } else if (block._type === "block") {
                const text =
                  block.children?.map((child: any) => child.text).join("") ||
                  "";
                return text;
              }
              return "";
            })
            .join("\n");

          const formatted: SanityCollection = {
            ...result,
            flag: {
              ...result.flag,
              highlights: formattedHighlights,
            },
          };

          console.log(formatted);
          console.log("I am getSanityCollection from Sanity");
          return formatted;
        } catch (error) {
          console.error("Failed to fetch collection Sanity:", error);
          return null;
        }
      },
    };
  },
};
