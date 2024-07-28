import React from "react";
import { kitsData } from "../data/kitsData";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useLanguage } from "./context/LanguageContext";

const ComparePackages = () => {
  const {pathname} = useLocation();
  const {language} = useLanguage();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        
      }}
    >
      {kitsData.map((kits, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #e1e4e5",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "28px",
            maxWidth:"350px",
            
            
          }}
        >
          <div style={{display:"flex", justifyContent:"center", padding:"10px", width:"100%", }}>
            <img src={kits.imageSrc} style={{borderRadius:"15px"}} />
          </div>
          <p>{kits.title}</p>
          <ul>
            {kits.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          {pathname===`/${language}/products/kits`&&<Link to={kits.link}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
            </svg>{" "}
            გაგრძელება
          </Link>}
        </div>
      ))}
    </div>
  );
};

export default ComparePackages;
