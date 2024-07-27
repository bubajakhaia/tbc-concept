import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Awards.css";
import { Navigation, Pagination } from "swiper/modules";
import {awardsData} from "../data/awardsData"
import { useLanguage } from "./context/LanguageContext";


const Awards = () => {
  const {language} = useLanguage();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="swiper-container">
        <Swiper
          className="award-swip"
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-award-next",
            prevEl: ".swiper-award-prev",
          }}
          pagination={{
            el: ".swiper-award-pagination",
            type: "progressbar",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {awardsData.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="award-card">
                <div className="award-card_content">
                  <div className="award_logo-wrapper">
                    <img
                      src={award.imageUrl}
                      alt={award.title}
                      className="award_logo"
                    />
                  </div>
                  <h3 className="card-title">{language==="ge"?award.title:award.titleB}</h3>
                  <p>{award.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="award-swip-controls">
          <div id="swiper-award-pagination" className="swiper-award-pagination">
            <div className="swiper-award-progressbar-fill"></div>
          </div>
          <div className="swiper-award-arrows">
            <svg
              className="swiper-award-prev"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="blue"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.7513 3.58331L1.91797 9.41665C1.58464 9.74998 1.58464 10.25 1.91797 10.5833L7.7513 16.4166C8.08464 16.75 8.58464 16.75 8.91797 16.4166C9.2513 16.0833 9.2513 15.5833 8.91797 15.25L4.5013 10.8333H17.5013C18.0013 10.8333 18.3346 10.5 18.3346 9.99998C18.3346 9.49998 18.0013 9.16665 17.5013 9.16665H4.5013L8.91797 4.74998C9.08464 4.58331 9.16797 4.41665 9.16797 4.16665C9.16797 3.91665 9.08464 3.74998 8.91797 3.58331C8.58464 3.24998 8.08464 3.24998 7.7513 3.58331Z" />
            </svg>
            <svg
              className="swiper-award-next"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="blue"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.2513 3.58331L18.0846 9.41665C18.418 9.74998 18.418 10.25 18.0846 10.5833L12.2513 16.4166C11.918 16.75 11.418 16.75 11.0846 16.4166C10.7513 16.0833 10.7513 15.5833 11.0846 15.25L15.5013 10.8333H2.5013C2.0013 10.8333 1.66797 10.5 1.66797 9.99998C1.66797 9.49998 2.0013 9.16665 2.5013 9.16665H15.5013L11.0846 4.74998C10.918 4.58331 10.8346 4.41665 10.8346 4.16665C10.8346 3.91665 10.918 3.74998 11.0846 3.58331C11.418 3.24998 11.918 3.24998 12.2513 3.58331Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
