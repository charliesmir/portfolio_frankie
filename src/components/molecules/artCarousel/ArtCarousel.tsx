import { ArtCard, ArtCardProps } from "@/components/atoms/artCard/ArtCard";
import "./ArtCarousel.css";

export interface ArtCarouselProps {
  card: ArtCardProps;
  arrow: string;
  handlePrev: () => void;
  handleNext: () => void;
}

export const ArtCarousel = ({
  card,
  arrow,
  handlePrev,
  handleNext,
}: ArtCarouselProps) => {
  return (
    <div className="ArtCarousel">
      <img className="ArtCarouselButtonPrev" src={arrow} onClick={handlePrev} />
      <ArtCard {...card} />
      <img className="ArtCarouselButtonNext" src={arrow} onClick={handleNext} />
    </div>
  );
};
