import {
  ArtGalleryProps,
  ArtGallery,
} from "@/components/atoms/artGallery/ArtGallery";
import { ArtTitleProps, ArtTitle } from "@/components/atoms/artTitle/ArtTitle";
import {
  ArtCarouselProps,
  ArtCarousel,
} from "@/components/molecules/artCarousel/ArtCarousel";
import "./CollectionPage.css";

export interface CollectionPageProps {
  title: ArtTitleProps;
  highlight: ArtCarouselProps;
  gallery: ArtGalleryProps;
}

export const CollectionPage = ({
  title,
  highlight,
  gallery,
}: CollectionPageProps) => {
  return (
    <div className="CollectionPage">
      <ArtTitle {...title} />
      <ArtCarousel {...highlight} />
      <ArtGallery {...gallery} />
    </div>
  );
};
