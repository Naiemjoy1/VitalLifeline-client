import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/img1.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
