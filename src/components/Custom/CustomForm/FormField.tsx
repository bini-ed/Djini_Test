import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";
import "../../../CSS/form.css";
type Props = {
  type: string;
  name: string;
  label: string;
  width: string;
  as?: string;
};

const FormField: FC<Props> = ({ type, name, label, as, width }: Props) => {
  return (
    <div style={{ width }}>
      <p style={{ color: "#4D5959", textAlign: "left" }}>{label}</p>
      <Field
        placeholder={label}
        className="field"
        type={type}
        name={name}
        as={as}
      ></Field>
      <ErrorMessage className="errorMessage" name={name} component="div" />
    </div>
  );
};

export default FormField;
