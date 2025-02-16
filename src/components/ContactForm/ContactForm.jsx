import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});
const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={styles.formBloc}>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={styles.form}>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <Field className={styles.input} type="text" id="name" name="name" />
          <ErrorMessage name="name" component="span" className={styles.error} />

          <label htmlFor="number">
            <b>Number</b>
          </label>
          <Field
            className={styles.input}
            type="tel"
            id="number"
            name="number"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />

          <button className={styles.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
