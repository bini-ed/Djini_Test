import axios from "axios";
import { URL } from "../config/config";

export const getAllProductService = async () => {
  return await axios.get(`${URL}products`);
};
export const addProductService = async (value: any) => {
  return await axios.post(`${URL}products/add`, value);
};
export const getCategoryService = async () => {
  return await axios.get(`${URL}products/categories`);
};
