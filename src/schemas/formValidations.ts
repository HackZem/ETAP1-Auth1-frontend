import * as yup from "yup";
// import { usersData } from "../data/usersData/usersData";

export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .min(6, "Minimum 6 symbol")
    .max(30, "Maximum 30 symbol")
    .matches(
      /^[a-zA-Z0-9/.]+$/,
      "The email should contain only the following characters: (a-z), (0-9) and (.)"
    )
    // .notOneOf(usersData.map((item)=>{return item.email}), "The email already exists")
    .required("Required"),
  password: yup
    .string()
    .min(5, "Minimum 5 symbol")
    .max(20, "Maximum 20 symbol")
    .matches(
      /^[0-9a-zA-Z\-_&!@#$%/^*]+$/,
      "The password should contain only the following characters: (a-z), (0-9) and (-_&!@#$%^*)"
    )
    .matches(/(?=.*[0-9])/, "Password does not contain numbers")
    .required("Required"),
});

export const registrationValidate = yup.object().shape({
  email: yup
    .string()
    .min(6, "Minimum 6 symbol")
    .max(30, "Maximum 30 symbol")
    .matches(
      /^[a-zA-Z0-9/.]+$/,
      "The email should contain only the following characters: (a-z), (0-9) and (.)"
    )
    // .notOneOf(usersData.map((item)=>{console.log(item, "item"); return item.email}), "The email already exists")
    .required("Required"),
  nickname: yup
    .string()
    .min(3, "Minimum 3 symbol")
    .max(20, "Maximum 20 symbol")
    .matches(/^[^\s]+$/, "Nickname must contain everything but spaces")
    .required("Required"),
  password: yup
    .string()
    .min(5, "Minimum 5 symbol")
    .max(20, "Maximum 20 symbol")
    .matches(
      /^[0-9a-zA-Z\-_&!@#$%/^*]+$/,
      "The password should contain only the following characters: (a-z), (0-9) and (-_&!@#$%^*)"
    )
    .matches(/(?=.*[0-9])/, "Password does not contain numbers")
    .required("Required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});
