import { FormikErrors, FormikValues } from "formik/dist/types";
import { ComponentProps } from "react";

export interface IInputEmail {
  id: string,
  type: string,
  label: string,
  errorMessage: string | undefined | null,
  values: {email: string, domain: string};
  className: string;
  handleChange: (a: any) => void;
  setDomain: (field: string, value: any) => void;
}