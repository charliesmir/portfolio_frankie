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
          console.log("I am getSanityCollection from Sanity");
          return result;
        } catch (error) {
          console.error("Failed to fetch collection Sanity:", error);
          return null;
        }
      },
    };
  },
};
