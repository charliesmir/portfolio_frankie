import { Contact, ContactProps } from "@/components/atoms/contact/Contact";
import "./ContactList.css";

export interface ContactListProps {
  contacts: ContactProps[];
}

export const ContactList = ({ contacts }: ContactListProps) => {
  return (
    <div className="ContactList">
      {contacts.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}
    </div>
  );
};
