import React, { useState } from "react";
import NavStatus from "../components/NavStatus";
import "./ProductPremium.css";
import SubscribeModal from "../components/SubscribeModal";
import Modal from "../components/Modal";
const ProductPremium = ({ header, text, imageUrl }) => {
  const [activeTab, setActiveTab] = useState("advantages");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const[isSecondOpen, setIsSecondOpen] = useState(false);
  const onSecondClose = ()=>{
    setIsSecondOpen((e)=>!e)
  }
  const onClose = () => {
    setIsOpen((e) => !e);
  };
  const handleFaqToggle = (faq) => {
    setExpandedFaq(expandedFaq === faq ? null : faq);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "advantages":
        return (
          <div className="tabs_advantages-tab">
            <p>
              <strong>კონცეპტის პრემიუმ ნაკრები მოიცავს:</strong>
            </p>
            <ul>
              <li>პირადი ბანკირის მომსახურება</li>
              <li>
                საბანკო ოპერაციების დიდი ნაწილის შესრულება დისტანციურად, ბანკში
                მოსვლის გარეშე
              </li>
              <li>
                ბანკომატიდან განაღდების მაღალი ლიმიტი - 50000 ლარი 24 საათში
              </li>
              <li>
                მაღალი კლასის ბარათი - Visa Platinum/Mastercard World Elite
              </li>
              <li>
                ბარათზე არსებულ 3000 ლარის ან მეტის დადებით ნაშთზე სარგებლის
                დარიცხვა 3.5%(ეფექტური 3.56%-დან)
              </li>
              <li>
                ბანკომატიდან განაღდების მაღალი ლიმიტი - დღეში 50000₾ / კვირაში
                150000₾,
              </li>
              <li>თიბისის და პარტნიორი ბანკის ბანკომატიდან განაღდება უფასო</li>
              <li>ბარათის უსაფრთხოების "პრემიუმ" მომსახურება</li>
              <li>საუკეთესო პირობები საბანკო ოპერაციებსა და პროდუქტებზე</li>
              <li>განსაკუთრებული პირობები ანაბარზე "ჩემი სეიფი"</li>
              <li>
                თვეში ხუთი კომუნალური გადახდა ციფრული არხებიდან - საკომისიოს
                გარეშე
              </li>
              <li>დიჯიპას აპლიკაციის უფასო რეგისტრაცია</li>
              <li>საბანკო ოპერაციების წარმოება, ცნობა, ამონაწერი უფასოდ</li>
              <li>განსაკუთრებული შეთავაზებები და სამოგზაურო უპირატესობები</li>
              <li>
                საერთაშორისო აეროპორტებში, მსოფლიო მასშტაბით 1200-ზე მეტი Lounge
                Key-ის ლაუნჯებით სარგებლობა
              </li>
              <li>კონცეპტ ცენტრის მომსახურება 24/7</li>
              <li>
                უფასო ვიზიტები და ფასდაკლებები კონცეპტ სივრცე - მარჯანიშვილის
                7-ში
              </li>
              <li>
                <span style={{ color: "black" }}>
                  ონლაინ ჩატი მობაილბანკში 24/7 - მხოლოდ კონცეპტის
                  მომხმარებლებისთვის
                </span>
              </li>
            </ul>
          </div>
        );
      case "rates":
        return (
          <div className="tabs-table">
            <div
              className="tabs_table-tab"
              data-advantages='<p><strong>კონცეპტის პრემიუმ ნაკრები მოიცავს:</strong></p><p>&amp;nbsp;</p><ul><li>პირადი ბანკირის მომსახურება</li><li>საბანკო ოპერაციების დიდი ნაწილის შესრულება დისტანციურად, ბანკში მოსვლის გარეშე</li><li>ბანკომატიდან განაღდების მაღალი ლიმიტი - 50000 ლარი 24 საათში</li><li>მაღალი კლასის ბარათი - Visa Platinum/Mastercard World Elite</li><li>ბარათზე არსებულ 3000 ლარის ან მეტის დადებითი ნაშთზე სარგებლის დარიცხვა 3.5%(ეფექტიური 3.56%-დან)</li><li>ბანკომატიდან განაღდების მაღალი ლიმიტი - დღეში 50000₾ / კვირაში 150000₾,</li><li>თიბისის და პარტნიორი ბანკის ბანკომატიდან განაღდება უფასო</li><li>ბარათის უსაფრთხოების &amp;quot;პრემიუმ&amp;quot; მომსახურება</li><li>საუკეთესო პირობები საბანკო ოპერაციებსა და პროდუქტებზე</li><li>განსაკუთრებული პირობები ანაბარზე &amp;quot;ჩემი სეიფი&amp;quot;</li><li>თვეში ხუთი კომუნალური გადახდა ციფრული არხებიდან - საკომისიოს გარეშე</li><li>დიჯიპას აპლიკაციის უფასო რეგისტრაცია</li><li>საბანკო ოპერაციების წარმოება, ცნობა, ამონაწერი უფასოდ</li><li>განსაკუთრებული შეთავაზებები და სამოგზაურო უპირატესობები&amp;nbsp;</li><li>საერთაშორისო აეროპორტებში, მსოფლიო მასშტაბით 1200-ზე მეტი Lounge Key-ის ლაუნჯებით სარგებლობა</li><li>კონცეპტ ცენტრის მომსახურება 24/7</li><li>უფასო ვიზიტები და ფასდაკლებები კონცეპტ სივრცე - მარჯანიშვილის 7-ში</li><li><span style="color:black">ონლაინ ჩატი მობაილბანკში 24/7 - მხოლოდ კონცეპტის მომხმარებლებისთვის</span></li></ul>'
              data-description=""
              data-faq="[object Object],[object Object],[object Object]"
            >
              <div className="tabs_table-tab-checkbox-block c-cursor-pointer"></div>
              <div className="tabs_table-wrapper">
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-active">
                      <div
                        className="grid-container"
                        style={{
                          gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
                          gridTemplateRows: "repeat(34, auto)",
                        }}
                      >
                        <div className="tabs_table-cell is-left">
                          პროდუქტი/სერვისი
                        </div>
                        <div className="tabs_table-cell is-grey">
                          პრემიუმ ნაკრები
                        </div>
                        <div className="tabs_table-cell">
                          სტანდარტული ტარიფი
                        </div>

                        <div className="tabs_table-cell is-left">
                          პირადი ბანკირის მომსახურება
                        </div>
                        <div className="tabs_table-cell is-grey">უფასო</div>
                        <div
                          className="tabs_table-cell"
                          style={{ gridRow: "span 9" }}
                        >
                          პროდუქტი / მომსახურება სატარიფო ნაკრებისგან
                          დამოუკიდებლად არ არის ხელმისაწვდომი
                        </div>

                        <div className="tabs_table-more-btn">
                          <div className="icon w-embed more-icon"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "faq":
        return (
          <div className="product-tabs-faq">
            <div className="product-tabs-faq-tab-list">
              <div
                className={`product-tabs-faq-tab-item ${
                  expandedFaq === "FAQ 1" ? "active" : ""
                }`}
                onClick={() => handleFaqToggle("FAQ 1")}
              >
                რა უპირატესობა აქვს კონცეპტ პრემიუმ ნაკრებს?
                {expandedFaq === "FAQ 1" && (
                  <div className="product-tabs-faq-content">
                    პრემიუმ ნაკრები, სხვა საბანკო და არასაბანკო უპირატესობებთან
                    ერთად, პირადი ბანკირის მომსახურებას გულისხმობს.
                  </div>
                )}
              </div>
              <div
                className={`product-tabs-faq-tab-item ${
                  expandedFaq === "FAQ 2" ? "active" : ""
                }`}
                onClick={() => handleFaqToggle("FAQ 2")}
              >
                როგორ გამოვიწერო კონცეპტ ნაკრები?
                {expandedFaq === "FAQ 2" && (
                  <div className="product-tabs-faq-content">
                    თიბისი კონცეპტის ციფრული ნაკრების გამოწერა შესაძლებელია
                    როგორც ვებსაიტზე მოთხოვნის ფორმის შევსებით, ასევე კონცეპტ
                    ცენტრში დარეკვით.
                  </div>
                )}
              </div>
              <div
                className={`product-tabs-faq-tab-item ${
                  expandedFaq === "FAQ 3" ? "active" : ""
                }`}
                onClick={() => handleFaqToggle("FAQ 3")}
              >
                რა ღირს პრემიუმ ნაკრები?
                {expandedFaq === "FAQ 3" && (
                  <div className="product-tabs-faq-content">
                    კონცეპტის პრემიუმ ნაკრების ღირს 30 ლარი/თვე ან 300 ლარი/წელი
                    რეზიდენტებისთვის, 50 ლარი/თვე ან 500 ლარი/წელი
                    არა-რეზიდენტებისთვის.
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: "#f9fafa" }}>
      <NavStatus />
      <div className="container">
        <div
          className="product-layout-container"
          style={{ paddingBottom: "50px" }}
        >
          <div className="product-text-img-layout">
            <div className="product-text-img-layout-text-block">
              <div
                style={{ textDecoration: "none", color: "black" }}
                to="/ge/singleview/245-digital-kit"
                className="no-decoration"
              >
                <h2 className="h1-style">{header}</h2>
              </div>
              <div className="product-text-img-layout-text-body">
                <p>
                  თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის,
                  ვისთვისაც
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
                <div
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ge/singleview/245-digital-kit"
                  className="no-decoration"
                >
                  <div className="product-button w-inline-block product-button-blue">
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

                    <div className="product-button-text"  onClick={onClose}>
                      {" "}
                      გამოწერა{" "}
                    </div>
                    <div className="product-button-hover"></div>
                  </div>
                </div>
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
                    src={imageUrl}
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
        <div className="tabs">
          <div className="tabs_menu">
            <div className="tabs_menu-list">
              <div
                className={`kit-tabs_menu-link ${
                  activeTab === "advantages" ? "is-active" : ""
                }`}
                onClick={() => setActiveTab("advantages")}
              >
                <div>უპირატესობები</div>
              </div>
              <div
                className={`kit-tabs_menu-link ${
                  activeTab === "rates" ? "is-active" : ""
                }`}
                onClick={() => setActiveTab("rates")}
              >
                <div>ტარიფები</div>
              </div>
              <div
                className={`kit-tabs_menu-link ${
                  activeTab === "faq" ? "is-active" : ""
                }`}
                onClick={() => setActiveTab("faq")}
              >
                <div>FAQ</div>
              </div>
            </div>
          </div>
          <div className="tabs_content">{renderContent()}</div>
        </div>
      </div>
      <SubscribeModal isOpen={isOpen} onClose={onClose} />
      <Modal isOpen={isSecondOpen} onClose={onSecondClose}>
        <div style={{height:"40vh"}}>Compare packages</div>
      </Modal>
    </div>
  );
};

export default ProductPremium;
