import { adapters } from "@/adapters/adapters";
import CollectionContent from "./collectionContent";

export const revalidate = 31536000; // 1 year

const { getSanityCollection } = adapters.cms();

interface Props {
  params: { slug: string };
}

export default async function CollectionPage({ params }: Props) {

  const { slug } = await params;
  const collection = await getSanityCollection(slug);

    if (!collection) {
    return <div>Loading...</div>;
  }

  return <CollectionContent collection={collection} />;
}