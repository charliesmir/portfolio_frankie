import "./Title.css";

export interface TitleProps {
  alignment: "left" | "right";
  color: "Default" | "onPrimary";
  title: string;
}

export const Title = ({ alignment, color, title }: TitleProps) => {
  return (
    <div className={`Title ${alignment} ${color}`}>
      {alignment === "right" && <div className="TitleLine" />}
      <div>{title}</div>
    </div>
  );
};
