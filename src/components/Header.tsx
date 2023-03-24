import { FC, useEffect, useState } from "react";
import { Row } from "antd";
import { Col } from "antd/es/grid";
import { useNavigate } from "react-router-dom";
type Props = {};

const Header: FC = (props: Props) => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 150 ? setSticky(true) : setSticky(false)
    );
    return () => {
      window.removeEventListener("scroll", () => setSticky(false));
    };
  });

  return (
    <div
      style={{
        width: "100%",
        // position: sticky ? "sticky" : "block"
      }}
    >
      <Row
        style={{
          backgroundColor: "whitesmoke",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Col span={12}>
          <p
            onClick={() => navigate("/")}
            style={{
              color: "darkgreen",
              fontSize: 30,
              textAlign: "left",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Poby
          </p>
        </Col>

        <Col span={3}>
          <p
            style={{
              color: "darkgreen",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            About
          </p>
        </Col>
        <Col span={3}>
          <p
            onClick={() => navigate("/product")}
            style={{
              color: "darkgreen",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Products
          </p>
        </Col>
        <Col span={3}>
          <p
            style={{
              color: "darkgreen",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Info
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
