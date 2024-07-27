import React from 'react';
import './Stats.css'; // Assuming you save your CSS in Stats.css
import { useLanguage } from './context/LanguageContext';

const Stats = () => {
  const {language} = useLanguage();
  return (
    <div className="stats-container">
      <div className="numbers">
        <div className="numbers_item">
          <div className="numbers_number">94,750</div>
          <p>{language==="ge"?"მომხმარებელი":"Users"}</p>
        </div>
        <div className="numbers_item">
          <div className="numbers_number">150+</div>
          <p>{language==="ge"?"ღონისძიება":"Events"}</p>
        </div>
        <div className="numbers_item">
          <div className="numbers_number">130+</div>
          <p>{language==="ge"?"შეთავაზება":"Offers"}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
