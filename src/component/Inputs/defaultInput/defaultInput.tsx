import { FC } from "react";
import Input from "@mui/joy/Input";
import { IDefaultInput } from "./interfaces";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from '@mui/joy/FormHelperText';
import "./defaultInput.css";

const DefaultInput: FC<IDefaultInput> = ({
  id,
  type = "text",
  label,
  value,
  onChange,
  className,
  errorMessage,
}) => {
  return (
    <div className="formInput defaultInput">
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        placeholder={"Please, enter text..."}
        type={type}
        value={value}
        onChange={onChange}
        className={`formInput__input ${className}`}
      />
      <FormHelperText sx={{color: "red", mt: 1}}>{errorMessage}</FormHelperText>
    </div>
  );
};

export default DefaultInput;
