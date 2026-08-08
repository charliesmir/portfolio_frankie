import { Title, TitleProps } from "@/components/atoms/title/Title";
import {
  ContactList,
  ContactListProps,
} from "@/components/molecules/contactList/ContactList";
import "./ContactsSection.css";

export interface ContactsSectionProps {
  title: TitleProps;
  contacts: ContactListProps;
}

export const ContactsSection = ({ title, contacts }: ContactsSectionProps) => {
  return (
    <div className="ContactsSection">
      <Title {...title} />
      <div className="ContactsSectionList">
        <ContactList {...contacts} />
      </div>
    </div>
  );
};
