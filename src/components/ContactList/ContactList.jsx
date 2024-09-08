import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/contacts.selectors.js";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    (<p>ContactList </p>),
    (
      <ul className={styles.contactList}>
        {contacts.map((item) => (
          <li className={styles.contactItem} key={item.id}>
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          </li>
        ))}
      </ul>
    )
  );
}
export default ContactList;
