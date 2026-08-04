import { Button, ButtonProps } from "@/components/atoms/button/Button";
import "./CollectionCard.css";

export interface CollectionCardProps {
  title: string;
  artwork: string;
  button: ButtonProps;
}

export const CollectionCard = ({
  title,
  artwork,
  button,
}: CollectionCardProps) => {
  return (
    <div className="CollectionCard">
      <img className="CollectionCardArtwork" src={artwork} alt={title} />
      <div className="CollectionCardDescription">
        <div>{title}</div>
        <Button {...button} />
      </div>
    </div>
  );
};
