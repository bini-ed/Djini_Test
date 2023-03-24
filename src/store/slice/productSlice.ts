import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Products, ProductsData } from "../../components/Custom/CustomTable";
import {
  addProductService,
  getAllProductService,
} from "../../services/productService";

const State: ProductsData = {
  products: [],
  limit: 0,
  skip: 0,
  total: 0,
};

interface PostState {
  product: ProductsData;
  loading: boolean;
  error: null | string | any;
}
const initialState = {
  product: State,
  loading: false,
  error: "",
} as PostState;

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const { data } = await getAllProductService();
    return data;
  }
);
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (values: any) => {
    const { data } = await addProductService(values);
    return data;
  }
);

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error = action.payload;
    });
  },
});

// export const { getProduct } = slice.actions;
export default slice.reducer;
