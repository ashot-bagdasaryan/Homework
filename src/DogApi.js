import { useEffect, useState } from "react";
import { APP_URL } from "../apiConsts";
import { RANDOM_IMG_URL } from "./apiConsts";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};
const DogApi = () => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const forPaintingImgs = () => {
      for (let i = 0; i <= 3; i++) {
        fetch(RANDOM_IMG_URL)
          .then((response) => response.json())
          .then((data) => setUrls(Object.keys(data.message)));
      }
    };
    forPaintingImgs();
  }, []);
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        items={1}
        responsive={responsive}
        ssr={true}
       
      >
        {urls.map((url) => (
          <div key={url}>
            <img src={url} style={{ width: "300px" }} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default DogApi;
