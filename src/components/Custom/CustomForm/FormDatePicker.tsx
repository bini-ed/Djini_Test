import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { useFormikContext, ErrorMessage } from "formik";

type Props = {
  name: string;
  width: string;
};

function FormDatePicker({ name, width }: Props) {
  const { setFieldValue } = useFormikContext();

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setFieldValue(name, date);
  };
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
      <DatePicker className="datePicker" onChange={onChange} picker="year" />
      <ErrorMessage className="errorMessage" name={name} component="div" />
    </div>
  );
}

export default FormDatePicker;
