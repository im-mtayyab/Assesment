import "./CustomSwiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import CalculatorCard from "../../pages/components/calculatorCard/CalculatorCard.jsx";
import FeatureCard from "../../pages/components/featureCard/FeatureCard.jsx";

import VisitedSlidesHandler from "./VisitedSlidesHandler";
import BREAKPOINTS from "../../pages/helpers/Constant.jsx";
import { useRef, useEffect, useState } from "react";

function CustomSwiper(props) {
  const {
    swiperClass = "default-swiper",
    // slidesView = 1,
    navPag = "-one",
    mode = "",
  } = props;
  const iterations =
    mode === "guide" ? Array(4).fill(null) : Array(8).fill(null);
    const swiperRef = useRef(null);
    const [slidesView, setSlidesView] = useState(1);
    useEffect(() => {
      const calculateSlidesView = () => {
        if (swiperRef.current) {
          const swiperWidth = swiperRef.current.offsetWidth;
          const slideWidth = 400; // Adjust this value based on your card's width
          let slides = (swiperWidth / slideWidth);
          console.log(slides);
          // slides = (slides < 1.6) ? slides - 2 : slides
          console.log("Hello", slides)
          setSlidesView(slides > 0 ? slides : 1);
        }
      };
  
      calculateSlidesView();
  
      window.addEventListener("resize", calculateSlidesView);
      return () => {
        window.removeEventListener("resize", calculateSlidesView);
      };
    }, []);

  return (
    <>
      <Swiper
        ref={swiperRef}
        className={`${swiperClass}`}
        modules={[Navigation, Pagination]}
        slidesPerView={(mode !== "guide") ? slidesView : "auto"}
        spaceBetween={10}
        navigation={{
          nextEl: `.swiper-button-next-unique${navPag}`,
          prevEl: `.swiper-button-prev-unique${navPag}`,
        }}
        onSlideChange={(swiper) => {
          const mySlides =
            mode === "guide" ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8];
          console.log(swiper, mySlides);
          VisitedSlidesHandler(swiper.activeIndex + 1, mySlides, mode);
        }}
        pagination={{
          el: `.swiper-pagination${navPag}`,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} item${mode}${index + 1}"></span>`;
          },
        }}
      >
        {iterations.map((_, index) => (
          <SwiperSlide key={index}>
            {mode === "guide" ? <FeatureCard /> : <CalculatorCard />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CustomSwiper;