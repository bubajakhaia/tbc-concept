import React from "react";
import "./ProductsSlide.css";
import { Link } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";

const ProductOfSlide = ({data, hasDate }) => {
  const{imgSrc:imageUrl,title,description,descriptionB,link:pathLink,titleB}=data;
  const {language} = useLanguage();

  return (
    
      <Link to={`/${language}/${pathLink}`} style={{textDecoration:"none"}}>
        <>
        
          <div className="offer-card">
            <div className="offer-card-img-wrapper">
              <picture>

                <img
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  className="banner-img"
                />
              </picture>
            </div>
            <div className="offer-card-content">
              {hasDate&&<p>{hasDate}</p>}
              <h3 className="card-title">{language==="ge"?title:titleB}</h3>
              <p className="product-card-text">{language==="ge"?description.slice(0,125):descriptionB.slice(0,125)}...</p>
            </div>
          </div>
        </>
      </Link>
    
  );
};

export default ProductOfSlide;
