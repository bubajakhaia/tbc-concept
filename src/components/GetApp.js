import React from "react";
import './GetApp.css';
import playstore from "../imgs/download.svg";
import appstore from "../imgs/appstore.svg";
import phone from "../imgs/phone.png";
import { useLanguage } from "./context/LanguageContext";

const GetApp = () => {
  const {language} = useLanguage();
  return (
    <div className="get-app-container">
        <div className="get-app-innercontainer">
      <div className="get-app-text">
        <h2 className="get-app-text-header">{language==="ge"?"ციფრული ბანკი":"Digital Bank"}</h2>
        <p className="get-app-text-p"> {language==="ge"?"შეასრულეთ საბანკო ოპერაციები დისტანციურად, ციფრული ბანკის დახმარებით":"Perform banking transactions remotely via Digital Bank"}  </p>
        <div className="get-app-stores">
            
            <a href="https://play.google.com/store/apps/details?id=com.icomvision.bsc.tbc&hl=en" target="_blank">
            <div className="appstore">
                <img src={playstore}/>
            </div>
            </a>
            <a href="https://apps.apple.com/us/app/tbc-bank/id766598432" target="_blank">
            <div className="appstore">
            <img src={appstore}/>
            </div>
            </a>

        </div>
      </div>
      <div className="phone-image-container">
        <img src={phone} className="phone-image"/>
      </div>
      </div>
    </div>
  );
};

export default GetApp;
