import React, { useState } from "react";
import "./TextImgLayout.css"; // Assuming you save your CSS in TextImgLayout.css
import { Link } from "react-router-dom";
import Modal from "./Modal";
import ComparePackages from "./ComparePackages";

const TextImgLayout = () => {
  const[isSecondOpen, setIsSecondOpen] = useState(false);
  const onSecondClose = ()=>{
    setIsSecondOpen((e)=>!e)
  }
  return (
    <>
      <div className="product-layout-container" >
        <div className="product-text-img-layout">
          
          <div className="product-text-img-layout-text-block">
          <Link style={{textDecoration:"none", color:"black"}}
              to="/ge/singleview/245-digital-kit"
              className="no-decoration"
            >
              <h2 className="h1-style" >ციფრული</h2>
            </Link>
            <div className="product-text-img-layout-text-body">
              <p>
                თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც
                <strong>
                  {" "}
                  საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია
                </strong>
                , ვინც აქტიურად მოიხმარს
                <strong> არასაბანკო პროდუქტებსა და შეთავაზებებს</strong> და
                ვისაც ურჩევნია დამოუკიდებლად,
                <strong> პირადი ბანკირის გარეშე</strong> მართოს საკუთარი
                ფინანსები და საბანკო ოპერაციები.
              </p>
            </div>
            <div className="product-buttons">
            <Link style={{textDecoration:"none", color:"black"}}
              to="/ge/singleview/245-digital-kit"
              className="no-decoration">
              <div
               
                className="product-button w-inline-block product-button-blue"
              >
                <div className="product-button-icon w-embed">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
                  </svg>
                </div>
                
                <div className="product-button-text"> იხილეთ მეტი </div>
                <div className="product-button-hover"></div>
              </div>
              </Link>
              <button className="product-button is-white w-inline-block">
                <div className="product-button-icon w-embed">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
                  </svg>
                </div>
                <div className="product-button-text" onClick={onSecondClose}>შედარება</div>
              </button>
            </div>
          </div>
          <a
            href="/ge/products/kits/singleview/245-digital-kit"
            className="product-text-img-layout-img-block"
          >
            <div className="product-text-img-layout-img-wrapper">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="https://static.tbcconcept.ge/mobile/media/mfvvitla.0j5430128849_7213815365374065_9017687812435872577_n.png"
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet="https://static.tbcconcept.ge/tablet/media/mfvvitla.0j5430128849_7213815365374065_9017687812435872577_n.png"
                />
                <img
                  src="https://static.tbcconcept.ge/desktop/media/mfvvitla.0j5430128849_7213815365374065_9017687812435872577_n.png"
                  loading="lazy"
                  width="370"
                  height="278"
                  className="product-text-img-layout-img"
                  alt="Digital Kit"
                />
              </picture>
            </div>
          </a>
        </div>
      </div>
      <div className="product-layout-container" style={{padding:"100px 0px"}}>
        <div className="product-text-img-layout">
          <a
            href="/ge/products/kits/singleview/245-digital-kit"
            className="product-text-img-layout-img-block"
            
          >
            <div className="product-text-img-layout-img-wrapper">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="https://static.tbcconcept.ge/mobile/media/0m25n3qt.w03prem.png"
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet="https://static.tbcconcept.ge/tablet/media/0m25n3qt.w03prem.png"
                />
                <img
                  src="https://static.tbcconcept.ge/desktop/media/0m25n3qt.w03prem.png"
                  loading="lazy"
                  width="370"
                  height="278"
                  className="product-text-img-layout-img"
                  alt="Description"
                />
              </picture>
            </div>
          </a>
          <div className="product-text-img-layout-text-block">
            <Link style={{textDecoration:"none", color:"black"}}
              to="/ge/singleview/245-digital-kit"
              className="no-decoration"
            >
              <h2 className="h1-style" >პრემიუმი</h2>
            </Link>
            <div className="product-text-img-layout-text-body">
              <p>
                თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი -{" "}
                <strong>პრემიუმ ნაკრები</strong>, სხვა საბანკო და არასაბანკო
                უპირატესობებთან ერთად,{" "}
                <strong>პირადი ბანკირის მომსახურებას</strong> გულისხმობს. პირადი
                ბანკირის მთავარი ამოცანა მომხარებლისთვის ცხოვრების გამარტივება
                და მისთვის უმაღლესი ხარისხის მომსახურების უზრუნველყოფაა.
              </p>
            </div>
            <div className="product-buttons">
            <Link style={{textDecoration:"none", color:"black"}}
              to="/ge/singleview/3300-premium-kit"
              className="no-decoration">
              <div
               
                className="product-button w-inline-block product-button-blue"
              >
                <div className="product-button-icon w-embed">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
                  </svg>
                </div>
                
                <div className="product-button-text"> იხილეთ მეტი </div>
                <div className="product-button-hover"></div>
              </div>
              </Link>
              <button className="product-button is-white w-inline-block">
                <div className="product-button-icon w-embed">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
                  </svg>
                </div>
                <div className="product-button-text" onClick={onSecondClose}>შედარება</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-layout-container">
        <div className="product-text-img-layout">
          
          <div className="product-text-img-layout-text-block">
          <Link style={{textDecoration:"none", color:"black"}}
              to="/ge/singleview/3301-concept-360"
              className="no-decoration"
            >
              <h2 className="h1-style" >360</h2>
            </Link>
            <div className="product-text-img-layout-text-body">
              <p>
                <strong>თიბისი კონცეპტის 360</strong> ნაკრები განკუთვნილია
                მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპიტარესობებთან ერთად,
                კიდევ უფრო <strong>მეტი ფინანსური ინსტრუმენტი</strong> და{" "}
                <strong>გაზრდილი შესაძლებლობები</strong> ესაჭიროება.
              </p>
            </div>
            <div className="product-buttons">
            <Link style={{textDecoration:"none", color:"black"}}
              to="/ge/singleview/3301-concept-360"
              className="no-decoration">
              <div
               
                className="product-button w-inline-block product-button-blue"
              >
                <div className="product-button-icon w-embed">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
                  </svg>
                </div>
                
                <div className="product-button-text"> იხილეთ მეტი </div>
                <div className="product-button-hover"></div>
              </div>
              </Link>
              <button className="product-button is-white w-inline-block">
                <div className="product-button-icon w-embed">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path>
                  </svg>
                </div>
                <div className="product-button-text" onClick={onSecondClose}>შედარება</div>
              </button>
            </div>
          </div>
          <a
            href="/ge/products/kits/singleview/245-digital-kit"
            className="product-text-img-layout-img-block"
          >
            <div className="product-text-img-layout-img-wrapper">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="https://static.tbcconcept.ge/mobile/media/nqeaa1rb.avl360.png"
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet="https://static.tbcconcept.ge/tablet/media/nqeaa1rb.avl360.png"
                />
                <img
                  src="https://static.tbcconcept.ge/desktop/media/nqeaa1rb.avl360.png"
                  loading="lazy"
                  width="370"
                  height="278"
                  className="product-text-img-layout-img"
                  alt="Description"
                />
              </picture>
            </div>
          </a>
        </div>
        <Modal  isOpen={isSecondOpen} onClose={onSecondClose} >
        <ComparePackages/>
      </Modal>
      </div>
    </>
  );
};

export default TextImgLayout;
