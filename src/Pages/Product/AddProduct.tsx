import { FC } from "react";
import FormContainer from "../../components/Custom/CustomForm/FormContainer";
import FormField from "../../components/Custom/CustomForm/FormField";
import * as Yup from "yup";
import FormDatePicker from "../../components/Custom/CustomForm/FormDatePicker";
import FormRating from "../../components/Custom/CustomForm/FormRating";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addProduct } from "../../store/slice/productSlice";
import Header from "../../components/Header";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  author: Yup.string().required().label("Author"),
  year: Yup.string().required().label("Year of publication"),
  rating: Yup.string().required().label("Rating"),
});

const AddProduct: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.product);
  const handleSubmit = async (values: any) => {
    dispatch(addProduct(values));
  };

  return (
    <div>
      <Header />
      {loading && <p>Loading....</p>}
      <FormContainer
        buttonTitle="Submit"
        handleSubmit={handleSubmit}
        initialValues={{ name: "", author: "", year: "", rating: "" }}
        validationSchema={validationSchema}
        width="90%"
      >
        <>
          <FormField
            width="90%"
            label="Name"
            name="name"
            type="text"
          ></FormField>
          <FormField
            width="90%"
            label="Author"
            name="author"
            type="text"
          ></FormField>
          <FormDatePicker width="90%" name="year" />
          <FormRating name="rating" width="90%" />
        </>
      </FormContainer>
    </div>
  );
};

export default AddProduct;
