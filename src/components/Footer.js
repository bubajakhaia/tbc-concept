import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./Navigation.css"; // Import your CSS file
import globe from "../imgs/globe.svg";
import "./Footer.css";
import icon2 from "../imgs/icon2.svg";

const Footer = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL path

  const handleLanguageChange = (lang) => {
    setLanguage(lang);

    // Replace language segment in the current URL
    const path = location.pathname.replace(/^\/(ge|eng)/, `/${lang}`);
    navigate(path); // Update URL to reflect the selected language
  };

  const getLanguageText = (lang) => {
    return lang === 'ge' ? 'ქარ' : 'ENG';
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to={`/${language}`} className="footer-logo-link">
          {language==="ge"?<svg data-v-562b0aec="" id="Layer-1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="165" height="32" viewbox="0 0 165 32" fill="black">
            <path data-v-562b0aec="" d="M81.72,12.35c-1.84,0-3.11,1.39-3.11,3.09s1.15,3.09,3.11,3.09,3.1-1.39,3.1-3.09-1.26-3.09-3.1-3.09ZM68.36,9.65c2.85,0,4.6,2.21,4.6,5.38h0c0,2.48-.88,4.38-2.47,5.91l-1.94-1.63c.9-1.01,1.71-2.58,1.71-4.27,0-1.81-.91-2.92-2.24-2.92s-2.27.86-2.27,2.67v2.57h-2.71v-2.57c0-1.81-.94-2.67-2.27-2.67s-2.24,1.11-2.24,2.92v.16c.05,1.64.83,3.14,1.71,4.12l-1.94,1.63c-1.59-1.53-2.47-3.42-2.47-5.9h0s0-.14,0-.14c.05-3.1,1.78-5.24,4.6-5.24,1.99,0,3.4.9,3.96,2.25.57-1.35,1.97-2.25,3.96-2.25ZM152.31,9.65c3.48,0,5.68,2.6,5.68,5.72,0,2.34-.77,4.13-2.16,5.57l-1.95-1.61c1.09-1.4,1.41-2.67,1.41-3.95,0-1.83-1.02-3.27-2.97-3.27s-2.97,1.44-2.97,3.27c0,1.28.31,2.55,1.41,3.95l-1.95,1.61c-1.39-1.44-2.16-3.23-2.16-5.57,0-3.11,2.2-5.72,5.68-5.72ZM124.49,5.33v.12c0,1.21,3.11,1.73,3.11,4.12,0,1.18-.93,2-2.04,2.25,1.9.61,3.08,2.11,3.08,4.27,0,2.87-2.15,4.97-5.7,4.97-2.57,0-4.77-1.44-5.34-3.91l2.44-1.01c.39,1.49,1.5,2.45,2.9,2.45,1.97,0,2.97-1.15,2.97-2.55,0-1.64-1.15-2.68-2.97-2.68h-1.67v-2.45h1.52c1.31,0,2.08-.49,2.08-1.33,0-1.54-3.11-1.58-3.11-4.06v-.18h2.73ZM86.32,5.41v2.45h-6.62c-.99,0-1.33.59-1.33,1.33v2.1c.78-1.19,2.48-1.55,3.64-1.55,3.5,0,5.52,2.52,5.52,5.7s-2.18,5.7-5.81,5.7-6.05-2.43-6.05-6.2v-5.67c0-2.13,1.44-3.86,3.88-3.86h6.78ZM136.74,14.33c-2.26.48-3.15,2.49-3.2,4.38.06,2.17,1.21,4.49,4.27,4.49s4.21-2.32,4.27-4.49c-.05-1.86-.9-3.82-3.07-4.35.07.39.21,1.28.21,1.99v1.19h-2.71v-1.19c0-.72.15-1.65.22-2.02ZM139.23,9.94v.57c0,.42-.05.92-.11,1.33,3.88.56,5.69,3.65,5.69,6.87,0,3.56-2.22,6.96-7,6.96s-7-3.4-7-6.96c0-3.25,1.85-6.37,5.81-6.88-.06-.41-.11-.89-.11-1.31v-.57h2.71ZM100.78,9.94v.12c0,1.49,1.15,1.84,1.15,3.41,0,1.49-.97,2.24-2.37,2.52,2.02.55,3.08,1.93,3.08,4.21,0,3.04-2.2,5.46-6,5.46s-5.98-2.55-5.98-5.68v-10.05h2.71v10.05c0,1.65,1.1,3.2,3.27,3.2s3.27-1.45,3.27-3.05c0-1.78-1.15-2.93-2.97-2.93h-.46v-2.45h1.04c1.04,0,1.67-.55,1.67-1.39,0-1.22-1.15-1.44-1.15-3.26v-.18h2.73ZM110.29,9.65c3.31,0,5.35,1.92,5.35,5.35v5.39c0,3.05-2.1,5.28-5.47,5.28-3.02,0-5.13-1.65-5.47-4.69l2.48-.69c.22,1.93,1.31,2.91,2.85,2.91,2.04,0,2.88-1.26,2.88-2.86v-5.31c0-1.66-.89-2.92-2.62-2.92s-2.64,1.26-2.64,2.92v.97h-2.71v-.99c0-3.42,2.03-5.35,5.35-5.35ZM52.59,9.94v2.38c0,1.67-.69,2.85-1.98,3.5,1.93.71,3.08,2.3,3.08,4.58,0,3.05-2.15,5.28-5.7,5.28-2.57,0-4.77-1.44-5.34-3.91l2.44-1.01c.39,1.49,1.5,2.45,2.9,2.45,1.97,0,2.97-1.26,2.97-2.86,0-1.78-1.15-2.99-2.97-2.99h-1.79v-2.45h1.18c1.69,0,2.48-.99,2.48-2.38v-2.57h2.73Z" class="cls-2"/><path data-v-562b0aec="" d="M13.92,5.92c.11.06.26.23.29.26,1.47,1.7,4.2,6.2,5.31,8.09,1.39,2.36,4.58,8.29,4.85,9.07.03.08,0,.18-.07.23-.08.05-.17.09-.4-.15-1.24-1.25-4.11-3.68-8.84-5.6-.25-.1-.47-.19-.68-.28-.66-.33-1.03-.82-1.21-1.5-.53-2.01-.91-5.76-.39-9,.02-.11.08-.5.21-.8.21-.45.6-.5.92-.32ZM12.14,5.48c.09.04.16.1.07.41-.47,1.7-1.14,5.39-.45,10.44.04.26.07.5.09.73.04.74-.2,1.3-.69,1.79-1.48,1.46-4.54,3.66-7.61,4.83-.11.04-.47.18-.8.21-.5.05-.74-.26-.74-.63,0-.13.07-.34.08-.38.74-2.12,3.29-6.73,4.37-8.63,1.35-2.38,4.91-8.1,5.45-8.73.05-.07.15-.1.23-.06ZM14.62,19.18c2.01.55,5.45,2.09,8,4.16.09.07.39.32.58.58.29.41.14.77-.18.95-.11.06-.33.11-.37.12-2.21.42-7.48.53-9.67.54-2.74.02-9.49-.19-10.3-.34-.09-.01-.16-.08-.17-.17,0-.1,0-.19.32-.27,1.71-.45,5.25-1.71,9.28-4.84.21-.16.4-.31.58-.44.62-.41,1.23-.48,1.9-.3Z" class="cls-2"/><rect data-v-562b0aec="" x="33.06" y=".84" width=".99" height="29.32" class="cls-1"/>
          </svg>
          :
          <svg data-v-174d8ed1="" width="165" height="32" viewbox="0 0 165 32" fill="black" xmlns="http://www.w3.org/2000/svg"><path data-v-174d8ed1="" d="M33.742 0H34.8154V32H33.742V0Z" class=""></path><path data-v-174d8ed1="" d="M159.89 17.2487C159.89 18.7892 160.73 19.5361 161.966 19.5361H161.99C162.597 19.5361 163.32 19.3494 163.903 19.046L165 22.4304C163.857 22.8738 162.923 23.0839 161.71 23.1072C158.233 23.2473 155.946 21.24 155.946 17.2487V10.3166H152.959V6.90884H155.946V2.77755L159.913 2.35742V6.90884H164.347V10.3166H159.89V17.2487Z" class=""></path><path data-v-174d8ed1="" d="M1.78182 25.7423C1.80618 25.734 1.82692 25.7268 1.84344 25.7213C5.48366 24.3209 9.12388 21.7067 10.8973 19.9795C11.4807 19.396 11.784 18.7191 11.714 17.8555C11.714 17.6545 11.678 17.4534 11.6404 17.2438C11.6256 17.1613 11.6105 17.0776 11.5974 16.9919C10.7807 10.9934 11.574 6.60535 12.1341 4.59806C12.2274 4.22461 12.1341 4.15458 12.0407 4.1079C11.9474 4.06122 11.8307 4.1079 11.7607 4.17792C11.1307 4.92482 6.90708 11.7169 5.29699 14.5412C3.99024 16.7819 0.980059 22.2669 0.093339 24.7877C0.093339 24.8048 0.080834 24.85 0.0649784 24.9074C0.0375153 25.0067 0 25.1424 0 25.2312C0 25.6746 0.280017 26.0247 0.88672 25.9781C1.216 25.9369 1.59976 25.8049 1.78182 25.7423Z"></path><path data-v-174d8ed1="" d="M24.4781 25.3245C21.4446 22.8738 17.361 21.0298 14.9809 20.3763C14.1875 20.1662 13.4641 20.2363 12.7174 20.7264C12.4841 20.8898 12.2741 21.0532 12.0174 21.2632C7.23376 24.9744 3.01017 26.4682 0.980044 27.005C0.606688 27.0984 0.583353 27.2151 0.583353 27.3318C0.583353 27.4485 0.676692 27.5185 0.770031 27.5419C1.72676 27.7286 9.75391 27.962 12.9974 27.9387C15.5876 27.9387 21.8646 27.7986 24.4781 27.2851C24.5248 27.2851 24.7815 27.2151 24.9215 27.1451C25.2948 26.935 25.4815 26.4915 25.1315 26.0014C24.8982 25.698 24.5481 25.3945 24.4315 25.3012L24.4781 25.3245Z"></path><path data-v-174d8ed1="" d="M15.1871 18.6183C15.0214 18.5523 14.8609 18.4885 14.7009 18.4157L14.6775 18.369C13.8841 17.9722 13.4408 17.3887 13.2308 16.5951C12.6007 14.2144 12.1574 9.75633 12.7641 5.90513L12.7686 5.87782C12.7958 5.71181 12.8668 5.27815 13.0208 4.94816C13.2774 4.41133 13.7441 4.36464 14.1175 4.57471C14.2575 4.64473 14.4442 4.83146 14.4675 4.87814C16.2176 6.90877 19.4611 12.2538 20.7679 14.4945C22.4013 17.2954 26.2049 24.3442 26.5316 25.2778C26.5782 25.3712 26.5549 25.4879 26.4616 25.5579C26.3682 25.628 26.2749 25.6746 25.9949 25.3945C24.5248 23.9241 21.1179 21.0299 15.4942 18.7425C15.389 18.6986 15.287 18.658 15.1871 18.6183Z"></path><path data-v-174d8ed1="" d="M52.7132 19.6061C50.2397 19.6061 48.1629 17.9722 48.1629 14.9146C48.1629 12.1137 50.123 10.1531 52.7832 10.1531C53.8799 10.1531 55.07 10.5732 56.0034 11.4135L58.5002 8.77601C56.7501 7.0488 54.9766 6.39526 52.7132 6.39526C48.0696 6.39526 44.196 9.19614 44.196 14.8913C44.196 20.5864 48.0696 23.3872 52.7132 23.3872C55.0933 23.3872 57.0301 22.6637 58.8969 20.8431L56.2367 18.229C55.2567 19.2093 53.9966 19.5594 52.7132 19.5594V19.6061Z"></path><path data-v-174d8ed1="" fill-rule="evenodd" clip-rule="evenodd" d="M68.5225 6.5586C63.419 6.56434 60.2269 10.3433 60.2269 14.9145C60.2269 19.536 63.3538 23.2705 68.5574 23.2705C73.7611 23.2705 76.9113 19.536 76.9113 14.9145C76.9113 10.3199 73.6261 6.56431 68.5225 6.5586ZM68.5574 19.6293C65.6639 19.6293 64.1939 17.342 64.1939 14.9145C64.1939 12.5105 65.6873 10.1531 68.5574 10.1531C71.2176 10.1531 72.921 12.4871 72.921 14.9145C72.921 17.3653 71.451 19.6293 68.5574 19.6293Z"></path><path data-v-174d8ed1="" d="M68.5225 6.5586L68.5108 6.55859H68.5341L68.5225 6.5586Z"></path><path data-v-174d8ed1="" fill-rule="evenodd" clip-rule="evenodd" d="M114.317 14.7979C114.317 9.9197 117.63 6.39526 122.834 6.39526L122.857 6.4186C128.224 6.4186 131.561 9.73297 130.955 16.3384H118.424C118.681 18.3223 120.407 19.7461 123.207 19.7461C124.678 19.7461 126.591 19.1859 127.501 18.2523L130.045 20.7498C128.341 22.5236 125.588 23.3639 123.137 23.3639C117.607 23.3639 114.317 19.9328 114.317 14.7979ZM122.951 9.89636C120.804 9.89636 119.054 10.9467 118.471 13.024H127.104C126.848 10.9467 125.238 9.89636 122.951 9.89636Z"></path><path data-v-174d8ed1="" fill-rule="evenodd" clip-rule="evenodd" d="M143.159 6.5354C141.339 6.5354 139.192 7.30564 137.955 9.10287L137.698 6.88551H133.988V29.6426H137.955V21.0533C139.098 22.8038 141.595 23.3407 143.299 23.3407C148.432 23.3407 151.396 19.6295 151.396 14.938C151.396 10.2466 148.106 6.5354 143.159 6.5354ZM142.855 19.4894C140.148 19.4894 138.305 17.4355 138.305 14.938C138.305 12.4406 140.008 10.3866 142.855 10.3866C145.702 10.3866 147.406 12.4406 147.406 14.938C147.406 17.4355 145.562 19.4894 142.855 19.4894Z"></path><path data-v-174d8ed1="" d="M101.879 14.9146C101.879 17.9722 103.956 19.6061 106.43 19.6061V19.5594C107.713 19.5594 108.973 19.2093 109.953 18.229L112.613 20.8431C110.747 22.6637 108.81 23.3872 106.43 23.3872C101.786 23.3872 97.9126 20.5864 97.9126 14.8913C97.9126 9.19614 101.786 6.39526 106.43 6.39526C108.693 6.39526 110.467 7.0488 112.217 8.77601L109.72 11.4135C108.787 10.5732 107.596 10.1531 106.5 10.1531C103.84 10.1531 101.879 12.1137 101.879 14.9146Z"></path><path data-v-174d8ed1="" d="M88.6254 6.62866C86.6186 6.62866 84.9851 7.44558 83.3517 9.03275L83.095 6.86207H79.5481V22.9438H83.4917V14.7512C83.4917 12.3004 85.1485 10.2698 87.5986 10.2698C90.0488 10.2698 91.4722 12.1137 91.4722 14.5645V22.9671H95.4391V14.5411C95.4391 9.49956 92.4056 6.67534 88.6487 6.67534L88.6254 6.62866Z"></path></svg>}
        </Link>
        <div className="language-toggler">
          <div className="language-display">
            <img src={globe} alt="Globe" />
            <span>{getLanguageText(language)}</span>
          </div>
          <div className="language-dropdown">
            {language === 'ge' ? (
              <div
                className="language-option"
                onClick={() => handleLanguageChange('eng')}
              >
                <img src={globe} alt="Globe" /> ENG
              </div>
            ) : (
              <div
                className="language-option"
                onClick={() => handleLanguageChange('ge')}
              >
                <img src={globe} alt="Globe" /> ქარ
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
