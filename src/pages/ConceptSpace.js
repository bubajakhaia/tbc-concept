import React from "react";
import NavStatus from "../components/NavStatus";
import LifestyleAd from "../components/LifestyleAd";
import BigMsg from "../components/BigMsg";
import SpaceCard from "../components/SpaceCard";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "./ConceptSpace.css";
import ConceptAd from "../components/ConceptAd";
import CafeAd from "../components/CafeAd";
import { spaceCards } from "../data/spaceCards";
import { useLanguage } from "../components/context/LanguageContext";
const ConceptSpace = () => {
  const {language} = useLanguage();

  return (
    <div style={{ backgroundColor: "#f9fafa" }}>
      <div className="container">
        <NavStatus />
        <div>
          <LifestyleAd
            isLink={null}
            imgUrl="https://static.tbcconcept.ge/desktop/media/4bh2wdnd.ayoCo-working.jpg"
            hHeader={language==="ge"?"თიბისი კოცეფტ სივრცე":"CO-WORKING SPACE"}
            pText={
              language==="ge"?"ᲛᲐᲠᲯᲐᲜᲘᲨᲕᲘᲚᲘᲡ ᲘᲡᲢᲝᲠᲘᲣᲚ ᲨᲔᲜᲝᲑᲐᲨᲘ, ᲗᲘᲑᲘᲡᲘ ᲙᲝᲜᲪᲔᲞᲢᲛᲐ ᲐᲮᲐᲚᲘ ᲨᲔᲡᲐᲫᲚᲔᲑᲚᲝᲑᲘᲡᲗᲕᲘᲡ ᲡᲠᲣᲚᲘᲐᲓ ᲒᲐᲜᲡᲮᲕᲐᲕᲔᲑᲣᲚᲘ, ᲛᲣᲚᲢᲘᲤᲣᲜᲥᲪᲘᲣᲠᲘ ᲡᲘᲕᲠᲪᲔ ᲨᲔᲥᲛᲜᲐ.":
              "For all additional visits, when paying with a TBC Concept Card, you will have a 20% discount."
            }
          />
          <BigMsg>
            {language==="ge"?"თანამედროვე სტანდარტების შესაბამისი გარემო, როგორც ინდივიდუალური,ისე გუნდური მუშაობისთვის":"Environment corresponding to modern standards, as for individual and team work."}
          </BigMsg>

          <Swiper
            className="space-card-swiper"
            modules={[Pagination]}
            pagination={{
              el: ".space-card-pagination",
              type: "progressbar",
            }}
            slidesPerView={1}
            spaceBetween={15}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {" "}
            {spaceCards.map((data, index) => (
              <SwiperSlide key={index}>
                <SpaceCard data={data} key={index} />
              </SwiperSlide>
            ))}
            <div className="space-card-pagination"></div>
          </Swiper>
        </div>
      </div>
      <div style={{ width: "100vw", backgroundColor: "white" }}>
        <div className="container" style={{ padding: "0" }}>
          <ConceptAd />
        </div>
      </div>
        <CafeAd/>
    </div>
  );
};

export default ConceptSpace;
