import { Rate } from "antd";
import { useFormikContext, ErrorMessage } from "formik";
import { FC } from "react";
type Props = {
  name: string;
  width: string;
};

const FormRating: FC<Props> = ({ name, width }: Props) => {
  const { setFieldValue } = useFormikContext();
  return (
    <div style={{ width }}>
      <p
        style={{
          textAlign: "left",
          color: "#4D5959",
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>
      <Rate onChange={(e) => setFieldValue(name, e)} />
      <ErrorMessage className="errorMessage" name={name} component="div" />
    </div>
  );
};

export default FormRating;
