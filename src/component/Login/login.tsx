import { FC, useState } from "react";
import DefaultInput from "../Inputs/defaultInput/defaultInput";
import "./login.css";
import { FormikConfig, useFormik } from "formik";
import { formikValues } from "./interfaces";
import { loginValidate } from "../../schemas/formValidations";
import InputEmail from "../Inputs/inputEmail/inputEmail";

const Login: FC = () => {
  const formikState: FormikConfig<formikValues> = {
    initialValues: {
      email: "",
      password: "",
      domain: "@gmail.com",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: loginValidate,
  };
  const formik = useFormik<formikValues>(formikState);

  return (
    <div className="loginForm-wrapper">
      <div className="loginForm">
        <h2>Login</h2>
        <form className="loginForm__form" onSubmit={formik.handleSubmit}>
          <InputEmail
            label="Email"
            id="email"
            type="text"
            values={{
              email: formik.values.email,
              domain: formik.values.domain,
            }}
            handleChange={formik.handleChange}
            setDomain={formik.setFieldValue}
            className={
              formik.errors.email && formik.touched.email
                ? "formInput__input-error"
                : ""
            }
            errorMessage={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ""
            }
          />
          <DefaultInput
            label="Password"
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={
              formik.errors.password && formik.touched.password
                ? "formInput__input-error"
                : ""
            }
            errorMessage={
              formik.errors.password && formik.touched.password
                ? formik.errors.password
                : ""
            }
          />

          <button type="submit" className="loginForm__form__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
