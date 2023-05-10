import {FormikConfig, useFormik} from "formik"
import DefaultInput from '../Inputs/defaultInput/defaultInput'
import { formikValues } from './interfaces';
import { FC, useContext } from "react";
import InputEmail from "../Inputs/inputEmail/inputEmail";
import { registrationValidate } from "../../schemas/formValidations";
import { GContext } from "../../context/globalContext";

const Registration: FC = () => {
  const gContext = useContext(GContext)
  const formikState: FormikConfig<formikValues> = {
    initialValues:{
    email: "",
    nickname: "",
    password: "",
    repeatPassword: "",
    domain: "@ukr.net"
  }, 
  onSubmit: (values: formikValues) => {
    // remove repeatPassword and domain
    const {repeatPassword, ...newValues} = values
    gContext.users.add(newValues)
  },
  validationSchema: registrationValidate,
}

  const formik = useFormik<formikValues>(formikState);
  // name to input must be equal to the value in initialValues
  return (
    <div className="loginForm-wrapper">
      <div className="loginForm">
        <h2>Registration</h2>
        <form className="loginForm__form" onSubmit={formik.handleSubmit}>
          <DefaultInput
            label="Nickname"
            id="nickname"
            type="text"
            value={formik.values.nickname}
            onChange={formik.handleChange}
            className={formik.errors.nickname && formik.touched.nickname ? "formInput__input-error": ""}
            errorMessage={formik.errors.nickname && formik.touched.nickname ? formik.errors.nickname: ""}
          />
          <InputEmail
            label="Email"
            id="email"
            type="text"
            values={{email: formik.values.email, domain: formik.values.domain}}
            handleChange={formik.handleChange}
            setDomain={formik.setFieldValue}
            className={formik.errors.email && formik.touched.email ? "formInput__input-error": ""}
            errorMessage={formik.errors.email && formik.touched.email ? formik.errors.email: ""}
          />
          <DefaultInput
            label="Password"
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={formik.errors.password && formik.touched.password  ? "formInput__input-error": ""}
            errorMessage={formik.errors.password && formik.touched.password ? formik.errors.password: ""}
          />
          <DefaultInput
            label="Repeat password"
            id="repeatPassword"
            type="password"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            className={formik.errors.repeatPassword && formik.touched.repeatPassword  ? "formInput__input-error": ""}
            errorMessage={formik.errors.repeatPassword && formik.touched.repeatPassword ? formik.errors.repeatPassword: ""}
          />
          <button
            type="submit"
            className="loginForm__form__button"
          >
            Registration
          </button>
        </form>
      </div>
   </div>
  )
}

export default Registration