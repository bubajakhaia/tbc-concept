import React from "react";
import LifestyleAd from "../components/LifestyleAd";
import { SwiperSlide, Swiper } from "swiper/react";
import OfferOfSlider from "../components/OfferOfSlider";
import NavStatus from "../components/NavStatus";
import Partners from "../components/Partners";
import sofa from "../imgs/sofa.webp";
import guyworking from "../imgs/guyworking.webp";
import { useLanguage } from "../components/context/LanguageContext";
const swiperSlides = [
  {
    desktopImage:
      "https://static.tbcconcept.ge/desktop/media/keg1y3r1.ak5booking_1.png",
    logo: "https://static.tbcconcept.ge/desktop/media/hwdkh3gg.abesitee-17.png",
    categories: ["მასტერქარდი", "ვიზა", "სამოგზაურო უპირატესობები"],
    title: "Booking.com - სპეციალური შეთავაზება",
    pathLink: "/lifestyle/offers/singleview/4563-",
  },
  {
    desktopImage:
      "https://static.tbcconcept.ge/desktop/media/e3ujnszu.3txsite-05.png",
    logo: "https://static.tbcconcept.ge/desktop/media/nwvz2qxb.rpbsite-06.png",
    categories: ["ავტო", "თეგეტა მოტორსი"],
    title: "თეგეტა მოტორსი",
    pathLink: "/lifestyle/offers/singleview/4560-",
  },
  {
    desktopImage:
      "https://static.tbcconcept.ge/desktop/media/zlk5qifa.0x2site-20.png",
    logo: "https://static.tbcconcept.ge/desktop/media/deauf4jo.01gsite-21.png",
    categories: ["შოპინგი"],
    title: "რონიკო",
    pathLink: "/lifestyle/offers/singleview/4323-roniko",
  },
];
const LivfestyleOverview = () => {
  const { language } = useLanguage();

  return (
    <div style={{ backgroundColor: "#f9fafa" }}>
      <NavStatus />
      <LifestyleAd
        imgUrl={sofa}
        pText={
          language==="ge"?"კონცეპტის ნაკრებები შესაძლებლობას გაძლევთ ისარგებლოთ მრავალი არასაბანკო პროდუქტით":"TBC Concept Packages offer users number of non-banking products"
        }
        hHeader={language==="ge"?"მიმოხილვა":"Overview"}
        isLink={true}
      />
      <>
        <div className="slider-header">
          <h2>{language==="ge"?"შეთავაზებები":"Offers"}</h2>
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
          </a>
        </div>

        <Swiper
          className="swip"
          spaceBetween={15}
          slidesPerView={2}
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
                desktopImage={slide.desktopImage}
                logo={slide.logo}
                categories={slide.categories}
                title={slide.title}
                pathLink={slide.pathLink}
                language={language}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <Partners />
      <div style={{ paddingTop: "70px", paddingBottom: "50px" }}>
        <LifestyleAd
          isLink={null}
          imgUrl={guyworking}
          hHeader={"კონცეპტ ასისტენტი"}
          pText={
            "კონცეპტ ასისტენტი დაგეხმარებათ 24/7-ზე, როგორც საბანკო მომსახურებებში, ისე არასაბანკო საკითხებზე: მოგზაურობის დაგეგმვა, სამუშაო სივრცის დაჯავშნა, კონსულტაცია მიმდინარე შეთავაზებებზე, საჩუქრის გაგზავნა და სხვა"
          }
        />
      </div>
    </div>
  );
};

export default LivfestyleOverview;
