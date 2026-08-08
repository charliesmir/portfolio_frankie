import { Title, TitleProps } from "@/components/atoms/title/Title";
import "./ArtworksSection.css";
import {
  CollectionCard,
  CollectionCardProps,
} from "@/components/molecules/collectionCard/CollectionCard";
import {
  CollectionGallery,
  CollectionGalleryProps,
} from "@/components/molecules/collectionGallery/CollectionGallery";

export interface ArtworksSectionProps {
  title: TitleProps;
  preview: CollectionCardProps;
  gallery: CollectionGalleryProps;
}

export const ArtworksSection = ({
  title,
  preview,
  gallery,
}: ArtworksSectionProps) => {
  return (
    <div className="ArtworksSection">
      <Title {...title} />
      <div className="ArtworksSectionGallery">
        <CollectionCard {...preview} />
        <CollectionGallery {...gallery} />
      </div>
    </div>
  );
};
