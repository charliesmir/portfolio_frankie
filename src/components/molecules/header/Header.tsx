import { Button, ButtonProps } from "@/components/atoms/button/Button";
import "./Header.css";

export interface HeaderProps {
  button: ButtonProps[];
}

export const Header = ({ button }: HeaderProps) => {
  return (
    <div className="Header">
      <Button
        title={button[0].title}
        onClick={button[0].onClick}
        alignment={button[0].alignment}
        size={button[0].size}
        status={button[0].status}
      />
      <div className="HeaderNavigation">
        <Button
          title={button[1].title}
          onClick={button[1].onClick}
          alignment={button[1].alignment}
          size={button[1].size}
          status={button[1].status}
        />
        <Button
          title={button[2].title}
          onClick={button[2].onClick}
          alignment={button[2].alignment}
          size={button[2].size}
          status={button[2].status}
        />
        <Button
          title={button[3].title}
          onClick={button[3].onClick}
          alignment={button[3].alignment}
          size={button[3].size}
          status={button[3].status}
        />
      </div>
    </div>
  );
};
