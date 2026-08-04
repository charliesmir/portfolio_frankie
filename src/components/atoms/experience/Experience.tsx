import "./Experience.css";

export interface ExperienceProps {
  name: string;
  place: string;
  year: string;
}

export const Experience = ({ name, place, year }: ExperienceProps) => {
  return (
    <div className="Experience">
      <div className="ExperiencePlace">{place}</div>
      <div className="ExperienceYear">{year}</div>
      <div className="ExperienceName">{name}</div>
    </div>
  );
};
