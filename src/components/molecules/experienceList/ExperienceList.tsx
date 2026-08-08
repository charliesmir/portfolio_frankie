import {
  Experience,
  ExperienceProps,
} from "@/components/atoms/experience/Experience";
import "./ExperienceList.css";

export interface ExperienceListProps {
  experiences?: ExperienceProps[];
}

export const ExperienceList = ({ experiences }: ExperienceListProps) => {
  return (
    <div className="ExperienceList">
      {experiences?.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </div>
  );
};
