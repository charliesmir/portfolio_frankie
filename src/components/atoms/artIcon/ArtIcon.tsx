import "./ArtIcon.css";

export interface ArtIconProps {
  artwork: string;
  name: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const ArtIcon = ({
  artwork,
  name,
  icon = "/look.svg",
  isActive = false,
  onClick,
}: ArtIconProps) => {
  return (
    <button className={`ArtIcon ${isActive ? "active" : ""}`} onClick={onClick}>
      <img className="ArtIconSymbol" src={icon} alt={name} />
      <div className="ArtIconCover" />
      <img className="ArtIconImage" src={artwork} alt={name} />
    </button>
  );
};
