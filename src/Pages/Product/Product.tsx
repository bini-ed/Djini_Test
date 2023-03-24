import React, { FC } from "react";
import { Card, Layout, Space } from "antd";
import Meta from "antd/es/card/Meta";

import Add from "../../assets/Image/cart/add1.png";
import Get from "../../assets/Image/cart/get.png";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Product: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Space
        size={"large"}
        align="center"
        direction="horizontal"
        style={{
          width: "100%",
          justifyContent: "space-evenly",
          minHeight: "80vh",
        }}
      >
        <Card
          hoverable
          onClick={() => navigate("/getProducts")}
          style={{
            width: "100%",
            maxWidth: "300px",
          }}
          cover={
            <img
              alt="example"
              src={Get}
              style={{ objectFit: "contain", width: "100%" }}
            />
          }
        >
          <Meta title="Get All Products" />
        </Card>

        <Card
          hoverable
          style={{
            width: "100%",
            maxWidth: "300px",
          }}
          onClick={() => navigate("/addProduct")}
          cover={
            <img
              alt="example"
              src={Add}
              style={{ objectFit: "contain", width: "100%" }}
            />
          }
        >
          <Meta title="Add Products" />
        </Card>
      </Space>
    </div>
  );
};

export default Product;
