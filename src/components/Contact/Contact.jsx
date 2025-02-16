import { useDispatch } from "react-redux";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps";

import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <div className={styles.container}>
        <span className={styles.iconText}>
          <BsFillPersonFill className={styles.userIcon} size="24" />
          {name}
        </span>
        <span className={styles.iconText}>
          <BsFillTelephoneFill className={styles.phoneIcon} size="24" />
          {number}
        </span>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
