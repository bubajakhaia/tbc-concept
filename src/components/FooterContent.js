import React from "react";
import "./FooterContent.css";
import { Link } from "react-router-dom";
import FooterContentCol from "./FooterContentCol";
const FooterContent = ({ language }) => {
  return (
    <div className="footer-content-container">
      <div className="footer-content-col">
        <Link to={`${language}/products/overview`} style={{textDecoration:"none"}}>
          <h3 className="footer-content-header">{language ==="ge"? "პროდუქტები": "Products"}</h3>
        </Link>
        <Link to={`${language}/products/kits`} style={{textDecoration:"none"}}>
          <p className="footer-content-item">{language ==="ge"? "ნაკრები": "Kits"}</p>
        </Link>
        <Link to={`/${language}/products/personalbanker`} style={{textDecoration:"none"}}>
          <p className="footer-content-item">{language ==="ge"? "პირადი ბანკირი": "Personal Banker"}</p>
        </Link>
      </div>
      <div className="footer-content-col">
        <Link to={`/${language}/lifestyle/overview`} style={{textDecoration:"none"}}>
          <h3 className="footer-content-header">Lifestyle</h3>
        </Link>
        <Link to={`/${language}/lifestyle/offers`} style={{textDecoration:"none"}}>
          <p className="footer-content-item"> {language ==="ge"? "შეთავაზებები": "Offers"}</p>
        </Link>
        <Link to={`/${language}/lifestyle/events`} style={{textDecoration:"none"}}>
          <p className="footer-content-item"> {language ==="ge"? "ღონისძიებები": "Events"}</p>
        </Link>
      </div>
      <div className="footer-content-col">
        <Link to={`/${language}/concept-space/overview`} style={{textDecoration:"none"}}>
          <h3 className="footer-content-header">{language ==="ge"? "კონცეპტის სივრცე": "Concept Space"}</h3>
        </Link>
        <Link to={`/${language}/concept-space/library`} style={{textDecoration:"none"}}>
          {" "}
          <p className="footer-content-item">{language ==="ge"? "ბიბლიოთეკა": "Library"}</p>
        </Link>
        <Link to={`/${language}/concept-space/cafe`} style={{textDecoration:"none"}}>
          {" "}
          <p className="footer-content-item">{language ==="ge"? "კაფე": "Cafe"}</p>
        </Link>
      </div>
      <FooterContentCol/>
    </div>
  );
};

export default FooterContent;
