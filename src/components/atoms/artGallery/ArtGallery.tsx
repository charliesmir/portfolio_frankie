import "./ArtGallery.css";

export type Artwork = {
  image: string;
  title: string;
};

export interface ArtGalleryProps {
  artworks: Artwork[];
}

export const ArtGallery = ({ artworks }: ArtGalleryProps) => {
  return (
    <div className="ArtGallery">
      {artworks.map((artwork, index) => (
        <div key={index}>
          <img
            src={artwork.image}
            alt={artwork.title}
            className="ArtGalleryImage"
          />
        </div>
      ))}
    </div>
  );
};
