import "./ArtGallery.css";

export type Artwork = {
  image: string;
  title: string;

};

export interface ArtGalleryProps {
  artworks: Artwork[];
    onClick: (index: number) => void;

}

export const ArtGallery = ({ artworks, onClick }: ArtGalleryProps) => {
  return (
    <div className="ArtGallery">
      {artworks.map((artwork, index) => (
        <div key={index}>
          <img
            src={artwork.image}
            alt={artwork.title}
            className="ArtGalleryImage"
            onClick={() => onClick(index)}
          />
        </div>
      ))}
    </div>
  );
};
