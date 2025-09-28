import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Controller
} from "swiper";
import { presentationText, presentationPhoto } from "../../data/presentationSlider";
import "swiper/swiper-bundle.css";
import "./presentationSlider.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller]);

function PresentationSlider() {
  const sliderPhoto = [...presentationPhoto, ...presentationPhoto];
  const [swiperRefs, setSwiperRefs] = useState<SwiperCore[]>([]);

  const handleClickNext = () => {
    swiperRefs.forEach((swiper) => {
      if (swiper) {
        swiper.slideNext();
      }
    });
  };

  return (
    <div className="sliderBlock">
      <div className="sliderContainer">
        <div className="textSlider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) =>
              setSwiperRefs((prevRefs) => [...prevRefs, swiper])
            }
          >
            {presentationText.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="textPart">
                    <div className="title">
                      <h4>{item.title1}</h4>
                      <h3>{item.title2}</h3>
                    </div>
                    <div className="description">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="imgBlock">
          <Swiper
            spaceBetween={10}
            slidesPerView={2.5}
            loop={true}
            onSwiper={(swiper) => {
              setSwiperRefs((prevRefs) => [...prevRefs, swiper]);
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              440: {
                slidesPerView: 1.2,
              },
              500: {
                slidesPerView: 1.4,
              },
              550: {
                slidesPerView: 1.5,
              },
              600: {
                slidesPerView: 1.7,
              },
              670: {
                slidesPerView: 2,
              },
              770: {
                slidesPerView: 2.2,
              },
              800: {
                slidesPerView: 2.5,
              },
              1000: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 1.4,
              },
              1200: {
                slidesPerView: 1.6,
              },
              1400: {
                slidesPerView: 1.8,
              },
              1500: {
                slidesPerView: 2,
              },
              1900: {
                slidesPerView: 2.9,
              },
            }}
          >
            {sliderPhoto.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="imageWrap">
                    <img
                      className="sliderImg"
                      src={item.pathFoto}
                      alt={item.photoDescription}
                    ></img>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <button className="btnNext" onClick={handleClickNext}>
        &gt;
      </button>
    </div>
  );
}

export default PresentationSlider;
