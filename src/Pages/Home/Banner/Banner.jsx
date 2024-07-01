import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { banner } from "../../../../utils/data/banner";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        // navigation={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
      >
        {banner.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{item.heading}</h1>
                  <p className="mb-5">{item.description}</p>
                  <div className="flex gap-6 justify-center items-center">
                    <Link to="/registration">
                      <button className="btn btn-primary text-white">
                        Join as a donor
                      </button>
                    </Link>
                    <Link to="/search">
                      <button className="btn btn-primary text-white">
                        Search Donors
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
