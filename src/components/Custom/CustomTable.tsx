import React, { FC, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

export interface Products {
  //   key: React.Key;
  //   id: React.Key;
  //   title: string;
  //   description: string;
  //   price: number;
  //   photo: string;
  //   rating: number;
  //   stock: number;
  //   category: string;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsData {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}

type Props = {
  products: ProductsData;
  loading: boolean;
};

const columns: ColumnsType<Products> = [
  {
    title: "ID",
    dataIndex: "id",
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
  {
    title: "Title",
    dataIndex: "title",
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
  {
    title: "Description",
    dataIndex: "description",
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
  {
    title: "Price",
    dataIndex: "price",
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.price - b.price,
    sortDirections: ["descend"],
  },
  {
    title: "Photo",
    dataIndex: "photo",
    render: (value: string, record: any) => (
      <img src={record?.images[0]} width={150} height={100}></img>
    ),

    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
  {
    title: "Rating",
    dataIndex: "rating",
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.rating - b.rating,
    sortDirections: ["descend"],
  },
  {
    title: "Stock",
    dataIndex: "stock",
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.stock - b.stock,
    sortDirections: ["descend"],
  },
  {
    title: "Category",
    dataIndex: "category",
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
];

// const onChange: TableProps<Products>["onChange"] = (
//   pagination,
//   filters,
//   sorter,
//   extra
// ) => {
//   console.log("params", sorter);
// };

const CustomTable: FC<Props> = ({ products, loading }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <Table
        bordered
        footer={() => <p>All Products</p>}
        loading={loading}
        columns={columns}
        dataSource={products.products}
        //   onChange={onChange}
      />
    </div>
  );
};

export default CustomTable;
