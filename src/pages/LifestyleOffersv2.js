import React, { useState, useEffect } from "react";
import { offersDataBig } from "../data/offersData";
import OfferOfSlider from "../components/OfferOfSlider";
import "./LifestyleOffers.css";
import NavStatus from "../components/NavStatus";
import { useLanguage } from "../components/context/LanguageContext";
const FilterCategory = ({ category, isActive, onClick }) => (
  <div
    className={`filter-category ${isActive ? "is-active" : ""}`}
    onClick={() => onClick(category)}
  >
    <div>{category}</div>
  </div>
);

const ITEMS_PER_PAGE = 12;

const LifestyleOffersv2 = () => {
  const [filteredOffers, setFilteredOffers] = useState(offersDataBig);
  const [activeCategory, setActiveCategory] = useState("ყველა");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const {language} = useLanguage();

  const categories = [
    "ყველა",
    "დასვენება",
    "შოპინგი",
    "ჯანმრთელობა და სილამაზე",
    "ავტო",
    "სხვა",
    "ახალი",
    "მასტერქარდი",
    "ვიზა",
    "ინვესტიციები",
    "სამოგზაურო უპირატესობები",
    "დეველოპერები",
    "სახლი",
    "კაფე და რესტორანი",
    "მარჯანიშვილის 7",
    "ჯაზ ფესტივალის შეთავაზებები",
    "თეგეტა მოტორსი",
    "დეპოზიტები",
  ];

  useEffect(() => {
    let offers = offersDataBig;

    // Filter by category
    if (activeCategory !== "ყველა") {
      offers = offers.filter((offer) =>
        offer.categories.includes(activeCategory)
      );
    }

    // Filter by search query
    if (searchQuery) {
      offers = offers.filter((offer) =>
        offer.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredOffers(offers);
    setCurrentPage(1); // Reset to first page on filter change
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredOffers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentOffers = filteredOffers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
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
                  <select className="filter-dropdown filter-input ">
                    <option value="option1">ყველა</option>
                    <option value="option2">ფასდაკლება</option>
                    <option value="option3">ქეშბექი</option>
                  </select>
                  <input
                    type="text"
                    maxlength="256"
                    name="Search"
                    placeholder="🔍მოძებნე"
                    className="filter-input is-search w-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="listing-list">
              {currentOffers.map((product, index) => (
                <OfferOfSlider
                  className="offers-card"
                  key={index}
                  desktopImage={product.desktopImage}
                  logo={product.logo}
                  categories={product.categories}
                  title={product.title}
                  pathLink={product.pathLink}
                  language={language}
                />
              ))}
            </div>
            <div className="pagination">
              <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &laquo; Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`pagination-button ${
                    i + 1 === currentPage ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifestyleOffersv2;
