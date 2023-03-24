import React, { FC } from "react";
import { Formik, Form, useFormikContext } from "formik";
import FormButton from "./FormButton";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  initialValues: object;
  handleSubmit: Function;
  validationSchema: object;
  buttonTitle: string;
  width: string;
};

const FormContainer: FC<Props> = ({
  children,
  initialValues,
  handleSubmit,
  validationSchema,
  buttonTitle,
  width,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f8f8f8",
              alignItems: "center",
              borderRadius: 10,
              width: width,
              flexWrap: "wrap",
            }}
          >
            {children}
            <FormButton
              isSubmitting={isSubmitting}
              title={buttonTitle}
              handleClick={() => handleSubmit()}
            />
          </Form>
        </>
      )}
    </Formik>
  );
};

export default FormContainer;
