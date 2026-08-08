import "./ArtCard.css";

export interface ArtCardProps {
  image: string;
  title: string;
  info: string;
  description: string;
}

export const ArtCard = ({ image, title, info, description }: ArtCardProps) => {
  return (
    <div className="ArtCard">
      <img src={image} alt={title} className="ArtCardImage" />
      <div className="ArtCardContent">
        <div className="ArtCardHeader">
          <div className="ArtCardTitle">{title}</div>
          <div className="ArtCardInfo">{info}</div>
        </div>
        <div className="ArtCardDescription">{description}</div>
      </div>
    </div>
  );
};
