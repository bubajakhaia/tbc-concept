import React from 'react'
import "./SpaceCard.css"
import { useLanguage } from './context/LanguageContext';

const SpaceCard = ({data}) => {
    const {title,titleB, image, details1, details2, details3, contact } = data;
    const {language} = useLanguage();

    return (
    
      <div className='space-card'>
        <div className='space-image-wrap'>
            <img src={image} alt={title} className='space-card-image'/>
        </div>
        <h3 className='space-card-title'>{language==="ge"?title:titleB}</h3>
        <div className='space-card-list'>
            <ul className='space-card-ul'>
                <li className='space-card-li'>{details1}</li>
                <li className='space-card-li'>{details2}</li>
                <li className='space-card-li'>{details3}</li>
            </ul>
        </div>
        <p>&nbsp;</p>
        <div className='space-card-contact'>
        <a href="tel:#">
      <span>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="blue"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2708 1.66602H8.27083C6.42917 1.66602 4.9375 3.15768 4.9375 4.99935V14.9993C4.9375 16.841 6.42917 18.3327 8.27083 18.3327H13.2708C15.1125 18.3327 16.6042 16.841 16.6042 14.9993V4.99935C16.6042 3.15768 15.1125 1.66602 13.2708 1.66602ZM6.60417 4.99935C6.60417 4.08268 7.35417 3.33268 8.27083 3.33268H13.2708C14.1875 3.33268 14.9375 4.08268 14.9375 4.99935V11.666H6.60417V4.99935ZM13.2708 16.666H8.27083C7.35417 16.666 6.60417 15.916 6.60417 14.9993V13.3327H14.9375V14.9993C14.9375 15.916 14.1875 16.666 13.2708 16.666ZM13.2708 4.99935C13.2708 5.45768 12.8958 5.83268 12.4375 5.83268H9.10417C8.64583 5.83268 8.27083 5.45768 8.27083 4.99935C8.27083 4.54102 8.64583 4.16602 9.10417 4.16602H12.4375C12.8958 4.16602 13.2708 4.54102 13.2708 4.99935ZM11.6042 14.9993C11.6042 15.4577 11.2292 15.8327 10.7708 15.8327C10.3125 15.8327 9.9375 15.4577 9.9375 14.9993C9.9375 14.541 10.3125 14.166 10.7708 14.166C11.2292 14.166 11.6042 14.541 11.6042 14.9993Z"
          ></path>
        </svg>
      </span>
      <span>{contact}</span>
    </a>
        </div>
      </div>
    
  )
}

export default SpaceCard

