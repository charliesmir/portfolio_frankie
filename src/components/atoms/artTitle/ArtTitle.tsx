import "./ArtTitle.css";

export interface ArtTitleProps {
  title: string;
  idea: string;
}

export const ArtTitle = ({ title, idea }: ArtTitleProps) => {
  return (
    <div className="ArtTitle">
      <div>{title}</div>
      <div className="ArtTitleIdea">{idea}</div>
    </div>
  );
};
