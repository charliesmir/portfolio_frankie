import "./Education.css";

export interface EducationProps {
  name: string;
  place: string;
  year: string;
}

export const Education = ({ name, place, year }: EducationProps) => {
  return (
    <div className="Education">
      <div className="EducationPlace">{place}</div>
      <div className="EducationName">{name}</div>
      <div className="EducationYear">{year}</div>
    </div>
  );
};
