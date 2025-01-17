import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css"; // Import your CSS file
import search from "../imgs/search.svg";
import globe from "../imgs/globe.svg";
import icon from "../imgs/icon.svg";
import dropdown from "../imgs/dropdown.svg";
import FooterContentCol from "./FooterContentCol";
import FooterBottom from "./FooterBottom";
import DigitalBank from "./DigitalBank";

const Navigation = ({ language, setLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for managing hamburger menu
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation(); // Get current URL path

  const handleDropdownToggle = (dropdownId) => {
    setDropdownOpen((prev) => (prev === dropdownId ? null : dropdownId));
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  // const handleLanguageChange = (lang) => {
  //   setLanguage(lang);
  //   setDropdownOpen(null); // Close the dropdown when language changes

  //   // Replace language segment in the current URL
  //   const path = location.pathname.replace(/^\/(ge|eng)/, `/${lang}`);
  //   navigate(path); // Update URL to reflect the selected language
  // };
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(null); // Close the dropdown when language changes
  
    const path = /^\/(ge|eng)/.test(location.pathname)
      ? location.pathname.replace(/^\/(ge|eng)/, `/${lang}`)
      : `${lang}${location.pathname}`;
  
    navigate(path);
  };
  const handleDropdownItemClick = () => {
    setDropdownOpen((prev) => !prev); // Close dropdown when an item is clicked
  };

  const getLanguageText = (lang) => {
    return lang === "ge" ? "ქარ" : "ENG";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <header ref={dropdownRef} 
      className="header" >
        <div className="header-container">
          <Link to={`/${language}`} className="header-logo-link">
            {/* <img src={language ==="ge"? icon: icon2} alt="Logo" /> */}
            {language === "ge" ? (
              <img src={icon} />
            ) : (
              <svg
                data-v-174d8ed1=""
                width="165"
                height="32"
                viewbox="0 0 165 32"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-v-174d8ed1=""
                  d="M33.742 0H34.8154V32H33.742V0Z"
                  class=""
                ></path>
                <path
                  data-v-174d8ed1=""
                  d="M159.89 17.2487C159.89 18.7892 160.73 19.5361 161.966 19.5361H161.99C162.597 19.5361 163.32 19.3494 163.903 19.046L165 22.4304C163.857 22.8738 162.923 23.0839 161.71 23.1072C158.233 23.2473 155.946 21.24 155.946 17.2487V10.3166H152.959V6.90884H155.946V2.77755L159.913 2.35742V6.90884H164.347V10.3166H159.89V17.2487Z"
                  class=""
                ></path>
                <path
                  data-v-174d8ed1=""
                  d="M1.78182 25.7423C1.80618 25.734 1.82692 25.7268 1.84344 25.7213C5.48366 24.3209 9.12388 21.7067 10.8973 19.9795C11.4807 19.396 11.784 18.7191 11.714 17.8555C11.714 17.6545 11.678 17.4534 11.6404 17.2438C11.6256 17.1613 11.6105 17.0776 11.5974 16.9919C10.7807 10.9934 11.574 6.60535 12.1341 4.59806C12.2274 4.22461 12.1341 4.15458 12.0407 4.1079C11.9474 4.06122 11.8307 4.1079 11.7607 4.17792C11.1307 4.92482 6.90708 11.7169 5.29699 14.5412C3.99024 16.7819 0.980059 22.2669 0.093339 24.7877C0.093339 24.8048 0.080834 24.85 0.0649784 24.9074C0.0375153 25.0067 0 25.1424 0 25.2312C0 25.6746 0.280017 26.0247 0.88672 25.9781C1.216 25.9369 1.59976 25.8049 1.78182 25.7423Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  d="M24.4781 25.3245C21.4446 22.8738 17.361 21.0298 14.9809 20.3763C14.1875 20.1662 13.4641 20.2363 12.7174 20.7264C12.4841 20.8898 12.2741 21.0532 12.0174 21.2632C7.23376 24.9744 3.01017 26.4682 0.980044 27.005C0.606688 27.0984 0.583353 27.2151 0.583353 27.3318C0.583353 27.4485 0.676692 27.5185 0.770031 27.5419C1.72676 27.7286 9.75391 27.962 12.9974 27.9387C15.5876 27.9387 21.8646 27.7986 24.4781 27.2851C24.5248 27.2851 24.7815 27.2151 24.9215 27.1451C25.2948 26.935 25.4815 26.4915 25.1315 26.0014C24.8982 25.698 24.5481 25.3945 24.4315 25.3012L24.4781 25.3245Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  d="M15.1871 18.6183C15.0214 18.5523 14.8609 18.4885 14.7009 18.4157L14.6775 18.369C13.8841 17.9722 13.4408 17.3887 13.2308 16.5951C12.6007 14.2144 12.1574 9.75633 12.7641 5.90513L12.7686 5.87782C12.7958 5.71181 12.8668 5.27815 13.0208 4.94816C13.2774 4.41133 13.7441 4.36464 14.1175 4.57471C14.2575 4.64473 14.4442 4.83146 14.4675 4.87814C16.2176 6.90877 19.4611 12.2538 20.7679 14.4945C22.4013 17.2954 26.2049 24.3442 26.5316 25.2778C26.5782 25.3712 26.5549 25.4879 26.4616 25.5579C26.3682 25.628 26.2749 25.6746 25.9949 25.3945C24.5248 23.9241 21.1179 21.0299 15.4942 18.7425C15.389 18.6986 15.287 18.658 15.1871 18.6183Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  d="M52.7132 19.6061C50.2397 19.6061 48.1629 17.9722 48.1629 14.9146C48.1629 12.1137 50.123 10.1531 52.7832 10.1531C53.8799 10.1531 55.07 10.5732 56.0034 11.4135L58.5002 8.77601C56.7501 7.0488 54.9766 6.39526 52.7132 6.39526C48.0696 6.39526 44.196 9.19614 44.196 14.8913C44.196 20.5864 48.0696 23.3872 52.7132 23.3872C55.0933 23.3872 57.0301 22.6637 58.8969 20.8431L56.2367 18.229C55.2567 19.2093 53.9966 19.5594 52.7132 19.5594V19.6061Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M68.5225 6.5586C63.419 6.56434 60.2269 10.3433 60.2269 14.9145C60.2269 19.536 63.3538 23.2705 68.5574 23.2705C73.7611 23.2705 76.9113 19.536 76.9113 14.9145C76.9113 10.3199 73.6261 6.56431 68.5225 6.5586ZM68.5574 19.6293C65.6639 19.6293 64.1939 17.342 64.1939 14.9145C64.1939 12.5105 65.6873 10.1531 68.5574 10.1531C71.2176 10.1531 72.921 12.4871 72.921 14.9145C72.921 17.3653 71.451 19.6293 68.5574 19.6293Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  d="M68.5225 6.5586L68.5108 6.55859H68.5341L68.5225 6.5586Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M114.317 14.7979C114.317 9.9197 117.63 6.39526 122.834 6.39526L122.857 6.4186C128.224 6.4186 131.561 9.73297 130.955 16.3384H118.424C118.681 18.3223 120.407 19.7461 123.207 19.7461C124.678 19.7461 126.591 19.1859 127.501 18.2523L130.045 20.7498C128.341 22.5236 125.588 23.3639 123.137 23.3639C117.607 23.3639 114.317 19.9328 114.317 14.7979ZM122.951 9.89636C120.804 9.89636 119.054 10.9467 118.471 13.024H127.104C126.848 10.9467 125.238 9.89636 122.951 9.89636Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M143.159 6.5354C141.339 6.5354 139.192 7.30564 137.955 9.10287L137.698 6.88551H133.988V29.6426H137.955V21.0533C139.098 22.8038 141.595 23.3407 143.299 23.3407C148.432 23.3407 151.396 19.6295 151.396 14.938C151.396 10.2466 148.106 6.5354 143.159 6.5354ZM142.855 19.4894C140.148 19.4894 138.305 17.4355 138.305 14.938C138.305 12.4406 140.008 10.3866 142.855 10.3866C145.702 10.3866 147.406 12.4406 147.406 14.938C147.406 17.4355 145.562 19.4894 142.855 19.4894Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  d="M101.879 14.9146C101.879 17.9722 103.956 19.6061 106.43 19.6061V19.5594C107.713 19.5594 108.973 19.2093 109.953 18.229L112.613 20.8431C110.747 22.6637 108.81 23.3872 106.43 23.3872C101.786 23.3872 97.9126 20.5864 97.9126 14.8913C97.9126 9.19614 101.786 6.39526 106.43 6.39526C108.693 6.39526 110.467 7.0488 112.217 8.77601L109.72 11.4135C108.787 10.5732 107.596 10.1531 106.5 10.1531C103.84 10.1531 101.879 12.1137 101.879 14.9146Z"
                ></path>
                <path
                  data-v-174d8ed1=""
                  d="M88.6254 6.62866C86.6186 6.62866 84.9851 7.44558 83.3517 9.03275L83.095 6.86207H79.5481V22.9438H83.4917V14.7512C83.4917 12.3004 85.1485 10.2698 87.5986 10.2698C90.0488 10.2698 91.4722 12.1137 91.4722 14.5645V22.9671H95.4391V14.5411C95.4391 9.49956 92.4056 6.67534 88.6487 6.67534L88.6254 6.62866Z"
                ></path>
              </svg>
            )}
          </Link>
          {dropdownOpen && <DigitalBank />}
          <nav className="header-menu">
            {/* Existing navigation items (hidden on small screens) */}
            
            
            <div className="header-dropdown">
              <div
                className={`header-dropdown-toggle ${
                  dropdownOpen === "products" ? "active" : ""
                }`}
                onClick={() => handleDropdownToggle("products")}
              >
                {language === "ge" ? "პროდუქტები" : "Products"}
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
                  {language === "ge" ? "პროდუქტების მიმოხილვა" : "Overview"}
                </Link>
                <Link
                  to={`/${language}/products/kits`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  {language === "ge" ? "ნაკრები" : "Kits"}
                </Link>
                <Link
                  to={`/${language}/products/personalbanker`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  {language === "ge" ? "პირადი ბანკირი" : "Personal Banker"}
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
                {language === "ge" ? "შეთავაზებები" : "Offers"}
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
                  {language === "ge" ? "მიმოხილვა" : "Overview"}
                </Link>
                <Link
                  to={`/${language}/lifestyle/offers`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  {language === "ge" ? "შეთავაზებები" : "Offers"}
                </Link>
                <Link
                  to={`/${language}/lifestyle/events`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  {language === "ge" ? "ღონისძიებები" : "Events"}
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
                {language === "ge" ? "კონცეპტის სივრცე" : "Concept Space"}
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
                  {language === "ge" ? "მიმოხილვა" : "Overview"}
                </Link>
                <Link
                  to={`/${language}/concept-space/cafe`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  {language === "ge" ? "კაფე" : "Cafe"}
                </Link>
                <Link
                  to={`/${language}/concept-space/library`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  {language === "ge" ? "ბიბლიოთეკა" : "Library"}
                </Link>
                <Link
                  to={`/${language}/concept-space/concept-branches`}
                  className="header-dropdown-link"
                  onClick={handleDropdownItemClick}
                >
                  {language === "ge" ? "კონცეფტ ფილიალები" : "Concept Branches"}
                </Link>
              </nav>
            </div>
          </nav>
          <div className="header-buttons">
            <Link to={`/${language}/search`} className="search-button">
              <img src={search} alt="Search" />
            </Link>
            <Link
              to={`/${language}/products/kits`}
              style={{ textDecoration: "none" }}
            >
              <button className="nav-button">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
                </svg>
                {language === "ge"
                  ? "გამოიწერეთ ნაკრები"
                  : "Subscribe To Package"}
              </button>
            </Link>
            <button className="hamburger-button" onClick={toggleMenu}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                className="hamburger-icon"
                alt="Menu"
              />
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
              {language === "ge" ? "პროდუქტები" : "Products"}
              <span className="fullscreen-dropdown-arrow">
                <img src={dropdown} />
              </span>
            </div>

            <nav
              className={`fullscreen-dropdown-list ${
                dropdownOpen === "products" ? "show" : ""
              }`}
            >
              <Link
                to={`/${language}/products/overview`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "პროდუქტების მიმოხილვა" : "Overview"}
              </Link>
              <Link
                to={`/${language}/products/kits`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "ნაკრები" : "Kits"}
              </Link>
              <Link
                to={`/${language}/products/personalbanker`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "პირადი ბანკირი" : "Personal Banker"}
              </Link>
            </nav>
          </div>
          <div
            className="fullscreen-dropdown pad-on-overlay"
            onClick={() => handleDropdownToggle("offers")}
          >
            <div
              className={`fullscreen-dropdown-toggle ${
                dropdownOpen === "offers" ? "active" : ""
              }`}
            >
              {language === "ge" ? "შეთავაზებები" : "Offers"}
              <span className="fullscreen-dropdown-arrow">
                <img src={dropdown} />
              </span>
            </div>
            <nav
              className={`fullscreen-dropdown-list ${
                dropdownOpen === "offers" ? "show" : ""
              }`}
            >
              <Link
                to={`/${language}/lifestyle/overview`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "მიმოხილვა" : "Overview"}
              </Link>
              <Link
                to={`/${language}/lifestyle/offers`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "შეთავაზებები" : "Offers"}
              </Link>
              <Link
                to={`/${language}/lifestyle/events`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "ღონისძიებები" : "Events"}
              </Link>
            </nav>
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
              {language === "ge" ? " კონცეპტის სივრცე" : "Concept Space"}
              <span className="fullscreen-dropdown-arrow">
                <img src={dropdown} />
              </span>
            </div>
            <nav
              className={`fullscreen-dropdown-list ${
                dropdownOpen === "concept-space" ? "show" : ""
              }`}
            >
              <Link
                to={`/${language}/concept-space/overview`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "მიმოხილვა" : "Overview"}
              </Link>
              <Link
                to={`/${language}/concept-space/cafe`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "კაფე" : "Cafe"}
              </Link>
              <Link
                to={`/${language}/concept-space/library`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "ბიბლიოთეკა" : "Library"}
              </Link>
              <Link
                to={`/${language}/concept-space/concept-branches`}
                className="fullscreen-dropdown-link"
                onClick={handleDropdownItemClick}
              >
                {language === "ge" ? "კონცეფტ ფილიალები" : "Concept Branches"}
              </Link>
            </nav>
          </div>
          <div className="pad-on-overlay">
            <FooterContentCol language={language} />
          </div>
          <FooterBottom language={language} />
        </div>
      </header>
    </>
  );
};

export default Navigation;
