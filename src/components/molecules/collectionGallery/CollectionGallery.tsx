import { ArtIcon, ArtIconProps } from "@/components/atoms/artIcon/ArtIcon";
import "./CollectionGallery.css";

export interface CollectionGalleryProps {
  collections: ArtIconProps[];
  onClick: (index: number) => void;
}

export const CollectionGallery = ({
  collections,
  onClick,
}: CollectionGalleryProps) => {
  return (
    <div className="CollectionGallery">
      {collections.map((collection, index) => (
        <ArtIcon
          key={index}
          artwork={collection.artwork}
          name={collection.name}
          icon={collection.icon}
          isActive={collection.isActive}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
