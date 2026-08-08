import "./Footer.css";

export interface FooterProps {
  LastUpdateYear: string;
}

export const Footer = ({ LastUpdateYear }: FooterProps) => {
  return (
    <div className="Footer">
      &copy; Copyright {LastUpdateYear} Frankie. All rights reserved.
    </div>
  );
};
