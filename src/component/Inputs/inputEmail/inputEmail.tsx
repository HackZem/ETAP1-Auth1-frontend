import { FC } from "react";
import FormLabel from '@mui/joy/FormLabel';
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { IInputEmail } from "./interfaces";
import FormHelperText from '@mui/joy/FormHelperText';
import "./inputEmail.css"

const InputEmail: FC<IInputEmail> = ({
  id,
  type = "text",
  label,
  values,
  handleChange,
  className,
  errorMessage,
  setDomain,
}) => {
 
  return (
    <div className="formInput inputEmail">
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        placeholder={"Please, enter text..."}
        type={type}
        value={values.email}
        onChange={handleChange}
        className={`formInput__input inputEmail__input ${className}`}
        endDecorator={
          <>
            <Select
              
              variant="plain"
              value={values.domain}
              onChange={(_, value) => {
                setDomain("domain", value)
              }}
              sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" }}}
            >
              <Option value="@gmail.com">@gmail.com</Option>
              <Option value="@ukr.net">@ukr.net</Option>
            </Select>
          </>
        }
        
      />
      <FormHelperText sx={{color: "red", mt: 1}}>{errorMessage}</FormHelperText>

    </div>
  );
};

export default InputEmail;
