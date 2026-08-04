import { Button, ButtonProps } from "@/components/atoms/button/Button";
import "./sectionList.css";

export interface SectionListProps {
  sections: ButtonProps[];
}

export const SectionList = ({ sections }: SectionListProps) => {
  return (
    <div className="SectionList">
      {sections.map((section, index) => (
        <Button key={index} {...section} />
      ))}
    </div>
  );
};
