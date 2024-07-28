import React, { useEffect, useState } from "react";
import NavStatus from "../components/NavStatus";
import "./LifestyleOffers.css";
import ProductOfSlide from "../components/ProductOfSlide";
import { pastEvents } from "../data/eventsData";
import { eventData } from "../data/eventsData";
import { useLanguage } from "../components/context/LanguageContext";
import { Link } from "react-router-dom";
const FilterCategory = ({ category, isActive, onClick }) => (
  <div
    className={`filter-category ${isActive ? "is-active" : ""}`}
    onClick={() => onClick(category)}
  >
    <div>{category}</div>
  </div>
);

const LifestyleEvents = () => {
  const [filteredOffers, setFilteredOffers] = useState(eventData);
  const [activeCategory, setActiveCategory] = useState("ყველა");
  const [searchQuery, setSearchQuery] = useState("");
  const {language} = useLanguage();

  const categories = [
    "ყველა",
    "კონცეფტ ცენტრი",
    "გამოფენა",
    "ფესტივალი",
    "ვორქშოფი",
  ];

  useEffect(() => {
    let offers = eventData;

    // Filter by category
    if (activeCategory !== "ყველა") {
      offers = offers.filter(
        (offer) => offer.categories && offer.categories.includes(activeCategory)
      );
    }

    // Filter by search query
    if (searchQuery) {
      offers = offers.filter((offer) =>
        offer.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredOffers(offers);
  }, [activeCategory, searchQuery]);

  return (
    <div className="lifestyle-background">
      <NavStatus />
      <div className="lifestyle-container">
        <div className="container">
          <h1>{language==="ge"?"შეთავაზებები":"Offers"}</h1>
          <div className="w-form">
            <form
              id="wf-form-Filter"
              name="wf-form-Filter"
              method="get"
              aria-label="Filter"
              className="filter"
            >
              <div className="filter-categories">
                {categories.map((category, index) => (
                  <FilterCategory
                    key={index}
                    category={category}
                    isActive={category === activeCategory}
                    onClick={setActiveCategory}
                  />
                ))}
              </div>
              <div className="filter-search-wrapper search-input">
                <input
                  type="text"
                  maxLength="256"
                  name="Search"
                  placeholder="🔍 მოძებნე"
                  className="filter-input is-search w-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="listing-item-sm">
            {filteredOffers.map((event, index) => (
              <div className="listing-item" key={index}>
                <div className="listing-item-text">
                  <div className="listing-item-header">{language==="ge"?event.title:event.titleB}</div>
                  <div className="listing-item-description">
                    {language==="ge"?event.description:event.descriptionB}
                  </div>
                  <div className="listing-button-wrap">
                    <Link to="/ge/lifestyle/events/singleview/4515-koka-ramishvili">
                    <button className="listing-button">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
                      </svg>
                      <span className="listing-button-text">{event.button_text}</span>
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="listing-image-wrap">
                  <img
                    src={event.imgSrc}
                    alt="event"
                    className="listing-item-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container  past-events">
        <h2 style={{paddingBottom:"40px", marginTop: "60px"}}>{language==="ge"?"წარსული ღონისძიებები":"Past Events"}</h2>
        <div className="past-event-wrap">
          {pastEvents.map((e,i)=>(
            <ProductOfSlide
            index={i}
            data={e} hasDate={e.date}
             />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestyleEvents;
