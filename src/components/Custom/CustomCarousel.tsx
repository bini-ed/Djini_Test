import { Carousel } from "antd";
import { FC } from "react";

interface Props {
  name: string;
}
interface ImageList {
  image: Props[];
}

const CustomCarousel: FC<ImageList> = ({ image }: ImageList) => {
  return (
    <Carousel autoplay>
      {image.map((items: Props, index: number) => (
        <div key={index}>
          <img
            src={items.name}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
          ></img>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
