import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperButton from "../SwiperButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RandomPostCard from "./RandomPostCard";

const RandomPosts = ({ posts }) => {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      breakpoints={{
        358: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}
      modules={[Navigation]}
    >
      {posts?.map((post, index) => (
        <SwiperSlide key={index}>
          <RandomPostCard post={post} />
        </SwiperSlide>
      ))}
      <SwiperButton />
    </Swiper>
  );
};

export default RandomPosts;
