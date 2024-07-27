import React from "react";
import "./ConceptAd.css";

const ConceptAd = () => {
  return (
    <div>
      <div className="get-app-container">
        <div className="get-app-innercontainer">
          <div className="get-app-text">
            <h2 className="get-app-text-header">კონცეპტის ბიბლიოთეკა</h2>
            <p className="get-app-text-p">
              ბიბლიოთეკის სივრცეში აღმოაჩენთ თქვენს ინტერესის სფეროზე მორგებულ
              არაერთ წიგნს ბიზნესის, ხელოვნებისა თუ ინოვაციების მიმართულებით.
            </p>
            <button className="concept-ad-button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
              </svg>
              <span className="subscribe-button-text">გამოიწერეთ</span>
            </button>
          </div>
          <div className="phone-image-container">
            <img style={{marginRight:"9px"}}
              src="https://static.tbcconcept.ge/desktop/media/m4lqpzom.zwt357995d1169a1d8692304e02719b8d58_1357995d1169a1d8692304e02719b8d58.webp"
              className="concept-ad-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptAd;
