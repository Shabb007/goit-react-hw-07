import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const selectedContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.list}>
      {selectedContacts.map((contact) => (
        <li key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
