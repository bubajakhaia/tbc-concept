import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import "./OffersSlider.css";
import OfferOfSlider from "./OfferOfSlider";
import { useLanguage } from "./context/LanguageContext";
import { swiperSlides } from "../data/offersData";
export default function OffersSlider() {
  const {language} = useLanguage();

  
  return (
    <>
      <div className="slider-header">
        <h2>{language==="ge"? "შეთავაზებები": "Offers"}</h2>
        <a href="/ge/lifestyle/offers" className="arrow-link">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="blue"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
          </svg>
          <div>{language==="ge"?"ყველა შეთავაზება":"All Offers"}</div>
        </a>
      </div>

      <Swiper
              
        className="swip"
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {swiperSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <OfferOfSlider
            key={index}
              desktopImage={slide.desktopImage}
              logo={slide.logo}
              categories={language==="ge"?slide.categories:slide.categories1}
              title={language==="ge"?slide.title:slide.title1}
              pathLink={slide.pathLink}
              
            />
          </SwiperSlide>
        ))}
      <div className="swiper-controls" id="swiper-controls-c">
        <div className="swiper-pagination" id="swiper-pagination">
        <div className="swiper-pagination-progressbar-fill" ></div>
        </div>
        <div className="swiper-arrows" id="swiper-arrows">
          <svg
            className="swiper-nav-arrow swiper-button-prev"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="blue"
            xmlns="http://www.w3.org/2000/svg"
            id="swiper-button-prev-c"
          >
            <path d="M7.7513 3.58331L1.91797 9.41665C1.58464 9.74998 1.58464 10.25 1.91797 10.5833L7.7513 16.4166C8.08464 16.75 8.58464 16.75 8.91797 16.4166C9.2513 16.0833 9.2513 15.5833 8.91797 15.25L4.5013 10.8333H17.5013C18.0013 10.8333 18.3346 10.5 18.3346 9.99998C18.3346 9.49998 18.0013 9.16665 17.5013 9.16665H4.5013L8.91797 4.74998C9.08464 4.58331 9.16797 4.41665 9.16797 4.16665C9.16797 3.91665 9.08464 3.74998 8.91797 3.58331C8.58464 3.24998 8.08464 3.24998 7.7513 3.58331Z"></path>
          </svg>

          <svg
            className="swiper-nav-arrow swiper-button-next"
            id="swiper-button-next-c"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="blue"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.2513 3.58331L18.0846 9.41665C18.418 9.74998 18.418 10.25 18.0846 10.5833L12.2513 16.4166C11.918 16.75 11.418 16.75 11.0846 16.4166C10.7513 16.0833 10.7513 15.5833 11.0846 15.25L15.5013 10.8333H2.5013C2.0013 10.8333 1.66797 10.5 1.66797 9.99998C1.66797 9.49998 2.0013 9.16665 2.5013 9.16665H15.5013L11.0846 4.74998C10.918 4.58331 10.8346 4.41665 10.8346 4.16665C10.8346 3.91665 10.918 3.74998 11.0846 3.58331C11.418 3.24998 11.918 3.24998 12.2513 3.58331Z"></path>
          </svg>
        </div>
      </div>
      </Swiper>
    </>
  );
}
