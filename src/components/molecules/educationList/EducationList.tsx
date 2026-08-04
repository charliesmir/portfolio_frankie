import {
  Education,
  EducationProps,
} from "@/components/atoms/education/Education";
import "./EducationList.css";

export interface EducationListProps {
  educations?: EducationProps[];
}

export const EducationList = ({ educations }: EducationListProps) => {
  return (
    <div className="EducationList">
      {educations?.map((education, index) => (
        <Education key={index} {...education} />
      ))}
    </div>
  );
};
