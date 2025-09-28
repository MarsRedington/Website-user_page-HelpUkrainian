import React, { useState } from "react";
import { testimonials } from "../../data/testimonials";
import "./testmonialsCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Controller,
} from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller]);

function TestimonialsCarousel() {
  const [swiperRefs, setSwiperRefs] = useState<SwiperCore[]>([]);

  const handleClickNext = () => {
    swiperRefs.forEach((swiper) => {
      if (swiper) {
        swiper.slideNext();
      }
    });
  };

  return (
    <div className="carouselContainer">
      <div className="carouselWrapper">
        <div className="testimonialsCarousel">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            onSwiper={(swiper) =>
              setSwiperRefs((prevRefs) => [...prevRefs, swiper])
            }
            breakpoints={{
              160: {
                slidesPerView: 1,
              },
              360: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1.1,
              },
              700: {
                slidesPerView: 1.3,
              },
              800: {
                slidesPerView: 1.5,
              },
              1000: {
                slidesPerView: 1.8,
              },
              1200: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 2.2,
              },
              1400: {
                slidesPerView: 2.5,
              },
              1600: {
                slidesPerView: 2.8,
              },
              1900: {
                slidesPerView: 3,
              },
              2050: {
                slidesPerView: 3.2,
              },
              2200: {
                slidesPerView: 3.7,
              },
            }}
          >
            {testimonials.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="testimonial">
                    <p>{item.answer}</p>
                    <span>{item.name}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <button className="buttonCarousel" onClick={handleClickNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
