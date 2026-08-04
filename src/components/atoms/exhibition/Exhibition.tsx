import "./Exhibition.css";

export interface ExhibitionProps {
  name: string;
  place: string;
  year: string;
  link?: string;
}

export const Exhibition = ({ name, place, year, link }: ExhibitionProps) => {
  return (
    <a
      className="Exhibition"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="ExhibitionYear">{year}</div>
      <div className="ExhibitionName">{name}</div>
      <div className="ExhibitionPlace">{place}</div>
    </a>
  );
};
