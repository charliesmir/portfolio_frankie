import { Title, TitleProps } from "@/components/atoms/title/Title";
import {
  SectionList,
  SectionListProps,
} from "@/components/molecules/sectionList/sectionList";
import { CvInfo, CvInfoProps } from "@/components/organisms/cvInfo/CvInfo";
import "./CvSection.css";

export interface CvSectionProps {
  title: TitleProps;
  buttons: SectionListProps;
  info: CvInfoProps;
}

export const CvSection = ({ title, buttons, info }: CvSectionProps) => {
  return (
    <div className="CvSection">
      <Title {...title} />
      <div className="CvSectionInfo">
        <SectionList {...buttons} />
        <CvInfo {...info} />
      </div>
    </div>
  );
};
