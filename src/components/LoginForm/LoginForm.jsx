import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operation";

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    console.log(values);
    actions.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const FeedbackSchema = Yup.object().shape({
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
        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId}></Field>
        <ErrorMessage name="email" component="span" />

        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId}></Field>
        <ErrorMessage name="password" component="span" />

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
