import React, { useState } from "react";
import NavStatus from "../components/NavStatus";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "../components/context/LanguageContext";

const ConceptCafe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const {language} = useLanguage();

  const images = [
    "https://static.tbcconcept.ge/desktop/media/pzu2biui.d4icafe1.png",
    "https://static.tbcconcept.ge/desktop/media/sp05xx5x.wmvcafe2.png",
    "https://static.tbcconcept.ge/desktop/media/s2meojib.rjkcafe3.png",
    "https://static.tbcconcept.ge/desktop/media/cnkinrah.5gbcafe4.png",
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div style={{ backgroundColor: "#f9fafa" }}>
      <NavStatus />
      <div
        className="container cafe-sm-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ borderRadius: "7px" }}
          src="https://static.tbcconcept.ge/desktop/media/hytakljm.hbccafe%20cover1.png"
          alt="hh"
        ></img>
        <div
          style={{
            width: "100%",
            maxWidth: "770px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              width: "100%",
              fontWeight: "700",
              marginTop: "60px",
            }}
          >
            {language==="ge"?"კაფე":"Cafe"}
          </h2>
          <a href="https://fb.com">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_167_7547)">
                <path d="M9.83464 9.00163H11.5013L12.168 6.33496H9.83464V5.00163C9.83464 4.31496 9.83464 3.66829 11.168 3.66829H12.168V1.42829C11.9506 1.39963 11.13 1.33496 10.2633 1.33496C8.4533 1.33496 7.16797 2.43963 7.16797 4.46829V6.33496H5.16797V9.00163H7.16797V14.6683H9.83464V9.00163Z"></path>
              </g>
              <defs>
                <clipPath id="clip0_167_7547">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5 0.000976562)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div
          style={{
            color: "#050505",
            width: "100%",
            maxWidth: "770px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "300px",
            marginTop: "40px",
            marginBottom: "80px",
          }}
        >
          <p>
            კაფეში მყუდრო გარემო და მრავალფეროვანი მენიუ დაგხვდებათ, რომელიც
            იდეალურია ბიზნეს-ლანჩებისთვის და საქმიანი შეხვედრებისთვის - ისევე
            როგორც განტვირთვისა და ახალი კერძების დაგემოვნებისთვის.&nbsp;
          </p>
          <p>
            მენიუ, რომელიც All day dining-ის კონცეფციით არის შექმნილი,
            შეფ-მზარეულმა ლუკა ჩიკვილაძემ შეადგინა და სტუმრებს ბევრ საინტერესო
            კერძს სთავაზობს, ისევე როგორც მრავალფეროვან ღვინის მენიუს.&nbsp;
          </p>
          <p>
            კაფის გამწვანებული ტერასა აქ გატარებულ დროს უფრო მშვიდს და
            კომფორტულს ხდის.
          </p>
          <p>
            <strong>
              კაფეში თიბისი კონცეპტის ბარათით გადახდისას, მომხმარებლებს
              გადახდილი თანხის 15% უკან დაუბრუნდებათ.
            </strong>
          </p>
        </div>
      </div>

      <div className="swiper-container">
        <Swiper
          style={{ marginBottom: "30px" }}
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="cafe-swiper-image"
                src={image}
                onClick={() => openLightbox(index)}
                style={{ cursor: "pointer" }}
                alt="cafe"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="award-swip-controls" style={{ alignItems: "center" }}>
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
      {isOpen && (
        <Lightbox
        
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((image) => ({ src: image }))}
          index={photoIndex}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" },
          image: {
            maxWidth: "70%", // Adjust the percentage as needed
            maxHeight: "70%", // Adjust the percentage as needed
            objectFit: "contain",
            margin: "auto",
          }, 
          slide: {
            maxWidth:"700px",
            
          }
        }}
        carousel={{ finite: images.length <= 1 }}
        render={{
          buttonPrev: images.length > 1 ? () => null : undefined,
          buttonNext: images.length > 1 ? () => null : undefined,
        }}
        />
      )}
    </div>
  );
};

export default ConceptCafe;