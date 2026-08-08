import {
  Exhibition,
  ExhibitionProps,
} from "@/components/atoms/exhibition/Exhibition";
import "./ExhibitionsList.css";

export interface ExhibitionsListProps {
  exhibitions?: ExhibitionProps[];
}

export const ExhibitionsList = ({ exhibitions }: ExhibitionsListProps) => {
  return (
    <div className="ExhibitionsList">
      {exhibitions?.map((exhibition, index) => (
        <Exhibition key={index} {...exhibition} />
      ))}
    </div>
  );
};
