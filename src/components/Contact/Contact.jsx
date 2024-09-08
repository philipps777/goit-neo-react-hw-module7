import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={styles.contact} id={id}>
      <div className={styles.details}>
        <p className={styles.field}>
          <IoMdContact /> {name}
        </p>
        <p className={styles.field}>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={styles.btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
}
export default Contact;
