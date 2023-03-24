import { Button } from "antd";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CustomTable from "../../components/Custom/CustomTable";
import Header from "../../components/Header";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchProduct } from "../../store/slice/productSlice";

const GetProduct: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const products = useAppSelector((state) => state.product.product);
  const loading = useAppSelector((state) => state.product.loading);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Header></Header>
      <div style={{ padding: 20 }}>
        <CustomTable loading={loading} products={products} />
      </div>
    </div>
  );
};

export default GetProduct;
