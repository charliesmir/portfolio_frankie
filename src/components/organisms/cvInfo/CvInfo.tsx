import {
  ExhibitionsList,
  ExhibitionsListProps,
} from "@/components/molecules/exhibitionsList/ExhibitionsList";
import {
  ExperienceList,
  ExperienceListProps,
} from "@/components/molecules/experienceList/ExperienceList";
import {
  EducationList,
  EducationListProps,
} from "@/components/molecules/educationList/EducationList";
import "./CvInfo.css";

export interface CvInfoProps {
  content: "Statement" | "Exhibitions" | "Education" | "Experience";
  statement?: string;
  exhibitions?: ExhibitionsListProps;
  education?: EducationListProps;
  experience?: ExperienceListProps;
}

export const CvInfo = ({
  content,
  statement,
  exhibitions,
  education,
  experience,
}: CvInfoProps) => {
  return (
    <div className="CvInfo">
      {content === "Statement" && (
        <div className="CvInfoStatement">{statement}</div>
      )}
      {content === "Exhibitions" && <ExhibitionsList {...exhibitions} />}
      {content === "Education" && <EducationList {...education} />}
      {content === "Experience" && <ExperienceList {...experience} />}
    </div>
  );
};
