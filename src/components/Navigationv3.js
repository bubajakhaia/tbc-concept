import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css"; // Import your CSS file
import search from "../imgs/search.svg";
import globe from "../imgs/globe.svg";
import icon from "../imgs/icon.svg";
import hamburgerIcon from "../imgs/arrow.svg"; // Add the path to your hamburger icon
import dropdown from "../imgs/dropdown.svg";
import FooterContentCol from "./FooterContentCol";
import FooterBottom from "./FooterBottom";
import AdditionalContent from "./DigitalBank"; // Import the additional component

const Navigation = ({ language, setLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for managing hamburger menu
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL path

  const handleDropdownToggle = (dropdownId) => {
    setDropdownOpen((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(null); // Close the dropdown when language changes

    // Replace language segment in the current URL
    const path = location.pathname.replace(/^\/(ge|eng)/, `/${lang}`);
    navigate(path); // Update URL to reflect the selected language
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(null); // Close dropdown when an item is clicked
  };

  const getLanguageText = (lang) => {
    return lang === "ge" ? "ქარ" : "ENG";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to={`/${language}`} className="header-logo-link">
            <img src={icon} alt="Logo" />
          </Link>
          <nav className="header-menu">
            {/* Existing navigation items (hidden on small screens) */}
            <div className="header-dropdown">
              <div
                className={`header-dropdown-toggle ${
                  dropdownOpen === "products" ? "active" : ""
                }`}
                onClick={() => handleDropdownToggle("products")}
              >
                პროდუქტები
              </div>
              <nav
                className={`header-dropdown-list ${
                  dropdownOpen === "products" ? "show" : ""
                }`}
              >
                <Link
                  to={`/${language}/products/overview`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  პროდუქტების მიმოხილვა
                </Link>
                <Link
                  to={`/${language}/products/kits`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  ნაკრები
                </Link>
                <Link
                  to={`/${language}/products/personalbanker`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  პირადი ბანკირი
                </Link>
              </nav>
            </div>
            <div className="header-dropdown">
              <div
                className={`header-dropdown-toggle ${
                  dropdownOpen === "offers" ? "active" : ""
                }`}
                onClick={() => handleDropdownToggle("offers")}
              >
                შეთავაზებები
              </div>
              <nav
                className={`header-dropdown-list ${
                  dropdownOpen === "offers" ? "show" : ""
                }`}
              >
                <Link
                  to={`/${language}/lifestyle/overview`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  მიმოხილვა
                </Link>
                <Link
                  to={`/${language}/lifestyle/offers`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  შეთავაზებები
                </Link>
                <Link
                  to={`/${language}/lifestyle/events`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  ღონისძიებები
                </Link>
              </nav>
            </div>
            <div className="header-dropdown">
              <div
                className={`header-dropdown-toggle ${
                  dropdownOpen === "concept-space" ? "active" : ""
                }`}
                onClick={() => handleDropdownToggle("concept-space")}
              >
                კონცეპტის სივრცე
              </div>
              <nav
                className={`header-dropdown-list ${
                  dropdownOpen === "concept-space" ? "show" : ""
                }`}
              >
                <Link
                  to={`/${language}/concept-space/overview`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  მიმოხილვა
                </Link>
                <Link
                  to={`/${language}/concept-space/cafe`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  კაფე
                </Link>
                <Link
                  to={`/${language}/concept-space/library`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  ბიბლიოთეკა
                </Link>
                <Link
                  to={`/${language}/concept-space/concept-branches`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  კონცეფტ ფილიალები
                </Link>
              </nav>
            </div>
          </nav>
          <div className="header-buttons">
            <Link to={`/${language}/search`} className="search-button">
              <img src={search} alt="Search" />
            </Link>
            <button
              className="nav-button"
              onClick={() => (window.location.href = `/${language}/subscribe`)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
              </svg>
              გამოიწერეთ ნაკრები
            </button>
            <button className="hamburger-button" onClick={toggleMenu}>
              <img src={hamburgerIcon} className="hamburger-icon" alt="Menu" />
            </button>
            <div className="language-toggler">
              <div className="language-display">
                <img src={globe} alt="Globe" />
                <span>{getLanguageText(language)}</span>
              </div>
              <div className="language-dropdown">
                {language === "ge" ? (
                  <div
                    className="language-option"
                    onClick={() => handleLanguageChange("eng")}
                  >
                    <img src={globe} alt="Globe" /> ENG
                  </div>
                ) : (
                  <div
                    className="language-option"
                    onClick={() => handleLanguageChange("ge")}
                  >
                    <img src={globe} alt="Globe" /> ქარ
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {dropdownOpen && <AdditionalContent />}
        <div className={`fullscreen-overlay ${menuOpen ? "show" : ""}`}>
          <div
            className="fullscreen-dropdown pad-on-overlay"
            onClick={() => handleDropdownToggle("products")}
          >
            <div
              className={`fullscreen-dropdown-toggle ${
                dropdownOpen === "products" ? "active" : ""
              }`}
            >
              პროდუქტები
              <span className="fullscreen-dropdown-arrow">
                <img src={dropdown} alt="Dropdown Arrow" />
              </span>
            </div>
            <div
              className={`fullscreen-dropdown-list ${
                dropdownOpen === "products" ? "show" : ""
              }`}
            >
              <Link
                to={`/${language}/products/overview`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                პროდუქტების მიმოხილვა
              </Link>
              <Link
                to={`/${language}/products/kits`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                ნაკრები
              </Link>
              <Link
                to={`/${language}/products/personalbanker`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                პირადი ბანკირი
              </Link>
            </div>
          </div>
          <div
            className="fullscreen-dropdown pad-on-overlay"
            onClick={() => handleDropdownToggle("lifestyle")}
          >
            <div
              className={`fullscreen-dropdown-toggle ${
                dropdownOpen === "lifestyle" ? "active" : ""
              }`}
            >
              Lifestyle
              <span className="fullscreen-dropdown-arrow">
                <img src={dropdown} alt="Dropdown Arrow" />
              </span>
            </div>
            <div
              className={`fullscreen-dropdown-list ${
                dropdownOpen === "lifestyle" ? "show" : ""
              }`}
            >
              <Link
                to={`/${language}/lifestyle/overview`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                მიმოხილვა
              </Link>
              <Link
                to={`/${language}/lifestyle/offers`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                შეთავაზებები
              </Link>
              <Link
                to={`/${language}/lifestyle/events`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                ღონისძიებები
              </Link>
            </div>
          </div>
          <div
            className="fullscreen-dropdown pad-on-overlay"
            onClick={() => handleDropdownToggle("concept-space")}
          >
            <div
              className={`fullscreen-dropdown-toggle ${
                dropdownOpen === "concept-space" ? "active" : ""
              }`}
            >
              კონცეპტის სივრცე
              <span className="fullscreen-dropdown-arrow">
                <img src={dropdown} alt="Dropdown Arrow" />
              </span>
            </div>
            <div
              className={`fullscreen-dropdown-list ${
                dropdownOpen === "concept-space" ? "show" : ""
              }`}
            >
              <Link
                to={`/${language}/concept-space/overview`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                მიმოხილვა
              </Link>
              <Link
                to={`/${language}/concept-space/cafe`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                კაფე
              </Link>
              <Link
                to={`/${language}/concept-space/library`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                ბიბლიოთეკა
              </Link>
              <Link
                to={`/${language}/concept-space/concept-branches`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                კონცეფტ ფილიალები
              </Link>
            </div>
          </div>
          {/* Language toggle for fullscreen overlay */}
          <div className="fullscreen-language-toggle">
            <div
              className="fullscreen-language-option"
              onClick={() => handleLanguageChange("ge")}
            >
              ქარ
            </div>
            <div
              className="fullscreen-language-option"
              onClick={() => handleLanguageChange("eng")}
            >
              ENG
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;