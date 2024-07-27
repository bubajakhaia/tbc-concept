import React from 'react';
import { Link } from 'react-router-dom';
import banker from "../imgs/banker.png";
import "./SubscribeKit.css"
import { useLanguage } from './context/LanguageContext';
const BankerHomePage = ({ isButton}) => {
  const {language} = useLanguage();

  return (
    <>
    <div className='personal-banker-container'>
      <div className="big-container">
    <div className='subscribe-container'>
      <img className='subscribe-image' src={banker} alt='chair'/>
      <div className='subscribe-text-container'>
      <h2 className='subscribe-header'>{language==="ge"?"პირადი ბანკირი":"Private Banker"}</h2>
      <p className='subscribe-text'>{language==="ge"?"თქვენი სანდო პარტნიორი ფინანსურ რჩევებსა და ოპერაციებში":"Your trusted partner in financial advice and operations"}</p>
      {isButton&& 
      <Link to={`/products/personalbanker`}>
        <button className='subscribe-button personal-banker-button'>
            <span className='subscribe-button-text'>{language==="ge"?"გაიგეთ მეტი":"LEARN MORE"}</span>
        </button>
      </Link>}
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default BankerHomePage
