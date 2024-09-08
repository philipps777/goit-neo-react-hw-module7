import { useDispatch } from "react-redux";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

import { addContact } from "../../redux/contactsOps";

const phoneRegExp = /^[\d+\-()]{1,10}$/g;
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum number of characters 3")
    .max(50, "Maximum number of characters 50")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Minimum number of characters 3")
    .matches(phoneRegExp, "Invalid phone number format")
    .required("Phone number is required"),
});

function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className={styles.wrapper}>
          <Form className={styles.form}>
            <label className={styles.field}>
              <span className={styles.tag}>Name</span>
              <Field className={styles.input} type="text" name="name" />
              <ErrorMessage
                className={styles.error}
                name="name"
                component="span"
              />
            </label>
            <label className={styles.field}>
              <span className={styles}>Number</span>
              <Field
                className={styles}
                type="tel"
                name="number"
                maxLength="10"
              />
              <ErrorMessage
                className={styles.error}
                name="number"
                component="span"
              />
            </label>
            <button className={styles.btn} type="submit">
              Add contact
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
export default ContactForm;
