import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operation";

export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(
      register(
        values
        // {
        // name: values.name,
        // email: values.email,
        // password: values.password,
        // }
      )
    );

    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one digit")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={css.formik}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId}></Field>
        <ErrorMessage name="name" component="span" />
        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId}></Field>
        <ErrorMessage name="email" component="span" />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId}></Field>
        <ErrorMessage name="password" component="span" />
        <button type="submit">Register</button>
        помилки
      </Form>
    </Formik>
  );
}
