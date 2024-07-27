import React from 'react'
import SelectPackage from './SelectPackage'
import "./SelectPackageDisplay.css"
import { useLanguage } from './context/LanguageContext';
import {cards} from "../data/ProductsData";
 
const SelectPackageDisplay = () => {
  const {language} = useLanguage()
  return (<>
    <div className="container">
    <div class="heading-wrapper"><h2>{language==="ge"?"შეარჩიეთ ნაკრები":"Select a Package"} </h2></div>

      <div className="grid-container">
        <div className="first-half">
          {cards.slice(0, 2).map((card, index) => (
            <SelectPackage
              key={index}
              imgSrc={card.imgSrc}
              title={language==="ge"?card.title:card.titleB}
              link={card.link}
              
              isHalfHeight
            />
          ))}
        </div>
        <div className="second-half">
          <SelectPackage
            imgSrc={cards[2].imgSrc}
            title={cards[2].title}
            link={cards[2].link}
            
            isFullHeight
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default SelectPackageDisplay
