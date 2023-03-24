import React, { FC } from "react";

type Props = {
  title: string;
  isSubmitting: boolean;
  handleClick: Function;
};

const FormButton: FC<Props> = ({ title, isSubmitting, handleClick }: Props) => {
  return (
    <div className="m-2 w-[50%] md:w-[20%] max-w-[150px]">
      <button
        disabled={isSubmitting}
        type="submit"
        onClick={() => handleClick()}
        className="formButton"
      >
        {title}
      </button>
    </div>
  );
};

export default FormButton;
