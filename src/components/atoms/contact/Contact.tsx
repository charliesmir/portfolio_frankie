import "./Contact.css";

export interface ContactProps {
  icon: string;
  name: string;
  link: string;
}

export const Contact = ({ icon, name, link }: ContactProps) => {
  return (
    <a
      className="Contact"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="ContactIcon" src={icon} alt={name} />
      <div>{name}</div>
    </a>
  );
};
