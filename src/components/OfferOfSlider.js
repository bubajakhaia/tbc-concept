import React from 'react';
import "./OfferOfSlider.css"
import { Link } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
const OfferOfSlider = ({ desktopImage, logo, categories, title,pathLink }) => {
  const {language} = useLanguage();
  return (
    <Link to={`/${language}${pathLink}`} style={{textDecoration:"none", color:"black"}}>
    <div className="offer-card">
      <div className="offer-card-img-wrapper">
        <picture>
          <source media="(max-width: 767px)" srcSet={desktopImage} />
          <source media="(max-width: 1023px)" srcSet={desktopImage} />
          <img src={desktopImage} alt={title} loading="lazy" className="banner-img" />
        </picture>
        <div className="card-logo">
          <img src={logo} alt="logo" className='card-logo-img' width={77} height={58} />
        </div>
      </div>
      <div className="offer-card-content">
        <div className="category-wrap">
          {categories.map((category, index) => (
            <p key={index} className="card-category">{category}</p>
          ))}
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
    </Link>
  );
};

export default OfferOfSlider;