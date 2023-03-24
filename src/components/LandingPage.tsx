import { FC, useEffect, useState } from "react";
import CustomCarousel from "./Custom/CustomCarousel";
import Header from "./Header";

import SP2 from "../assets/Image/sp.jpg";
import SP3 from "../assets/Image/sp2.jpg";
import SP1 from "../assets/Image/sp3.jpg";
import { getCategoryService } from "../services/productService";
import { Card, List, Typography } from "antd";

const LandingPage: FC = () => {
  const image = [{ name: SP1 }, { name: SP2 }, { name: SP3 }];
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await getCategoryService();
      if (data) setCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
    return () => {
      setCategories([]);
    };
  }, []);

  return (
    <div>
      <Header />
      <CustomCarousel image={image} />
      <Typography style={{ textAlign: "left", padding: 10 }}>
        Categories
      </Typography>
      <List
        grid={{ gutter: 16, column: 8 }}
        dataSource={categories}
        renderItem={(item: any) => (
          <>
            <List.Item>
              <Card>{item}</Card>
            </List.Item>
          </>
        )}
      />
    </div>
  );
};

export default LandingPage;
