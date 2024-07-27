import React from 'react'
import "./DigitalBank.css"
import { useLanguage } from './context/LanguageContext';
const  DigitalBank = () => {
  const {language} = useLanguage();
  return (
    <div className='digital-bank'>
        <div className='digital-bank-inner'>
            <div className='digital-image-container'>
      <img className="digital-image" src='https://static.tbcconcept.ge/desktop/media/uz0y3tkf.idxFixed%20aspect%20ratio%20block%20[Utility].png' alt='digtl'/>
      </div>
      <a className='digital-arrow' href='https://tbconline.ge/tbcrd/login?t=false' target='_blank' rel='noreferrer'>
      <svg data-v-562b0aec="" width="20" height="21" viewbox="0 0 20 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-562b0aec="" d="M15.8342 4.04761H7.50091C7.04258 4.04761 6.66758 4.42261 6.66758 4.88094C6.66758 5.33927 7.04258 5.71427 7.50091 5.71427H13.8259L3.57578 15.9643C3.25078 16.2893 3.25078 16.8143 3.57578 17.1393C3.74245 17.3059 3.95078 17.3809 4.16744 17.3809C4.38411 17.3809 4.59244 17.2976 4.75911 17.1393L15.0009 6.88927V13.2143C15.0009 13.6726 15.3759 14.0476 15.8342 14.0476C16.2925 14.0476 16.6675 13.6726 16.6675 13.2143V4.88094C16.6675 4.42261 16.2925 4.04761 15.8342 4.04761Z"></path></svg>
      <p>{language==="ge"?"ციფრული ბანკი":"Digital Bank"}</p>
      </a>
      </div>
    </div>
  )
}

export default DigitalBank
