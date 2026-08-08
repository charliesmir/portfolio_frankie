import "./TitleSection.css";

export interface TitleSectionProps {
  name: string;
  surname: string;
  about: string;
  picture: string;
}

export const TitleSection = ({
  name,
  surname,
  about,
  picture,
}: TitleSectionProps) => {
  return (
    <div className="TitleSection">
      <div className="TitleSectionText">
        <div className="TitleSectionFullName">
          <div className="TitleSectionName">{name}</div>
          <div className="TitleSectionSurname">{surname}</div>
        </div>
        <div className="TitleSectionAbout">{about}</div>
      </div>
      <img
        src={picture}
        alt={`${name} ${surname}`}
        className="TitleSectionPicture"
      />
    </div>
  );
};
