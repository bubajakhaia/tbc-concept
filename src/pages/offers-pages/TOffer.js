import React from "react";
import { useLanguage } from "../../components/context/LanguageContext";
import OffersSlider from "../../components/OffersSlider";

const TOffer = () => {
  const { language } = useLanguage();
  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          maxWidth: "770px",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            width: "100%",
            fontWeight: "700",
            marginTop: "60px",
          }}
        >
          IVERIA BEACH - დაიბრუნეთ 30%
        </h2>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <a href="https://fb.com">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_167_7547)">
                <path d="M9.83464 9.00163H11.5013L12.168 6.33496H9.83464V5.00163C9.83464 4.31496 9.83464 3.66829 11.168 3.66829H12.168V1.42829C11.9506 1.39963 11.13 1.33496 10.2633 1.33496C8.4533 1.33496 7.16797 2.43963 7.16797 4.46829V6.33496H5.16797V9.00163H7.16797V14.6683H9.83464V9.00163Z"></path>
              </g>
              <defs>
                <clipPath id="clip0_167_7547">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5 0.000976562)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div style={{ margin: "50px auto" }}>
        <img
          style={{ borderRadius: "5px" }}
          src="https://static.tbcconcept.ge/desktop/media/mqskrcme.s3mDSC_2268%201.png"
        />
      </div>
      <div style={{ margin: "50px auto", padding: "40px 120px" }}>
        <p>გამარჯობა,</p>
        <p>
          თიბისი კონცეპტის შეთავაზების ფარგლებში, შესაძლებლობა გაქვთ, ესტუმროთ
          Iveria Beach-ს ყოველ პარასკევს, შაბათს, კვირას და თიბისი კონცეპტის
          Mastercard-ის ბარათით, დაიბრუნოთ გადახდილი თანხის 30%, ჯამში მაქსიმუმ
          100 ლარი, სივრცეში შესვლისას. შეთავაზება ძალაშია 2024 წლის 30 აგვისტოს
          ჩათვლით. თანხის დაბრუნებას შეძლებთ მხოლოდ ფიზიკურ ობიექტში, თიბისის
          POS ტერმინალზე გადახდისას შეთავაზება ვრცელდება შემდეგ სადებეტო
          ბარათებსა და მათ ციფრულ ანალოგებზე: TBC MC World Elite. სეზონის
          განმავლობაში, Iveria Beach ხუთ სპეციალურ ღონისძიებას უმასპინძლებს.
          
        </p>
      </div>
      <div>
        <OffersSlider/>
      </div>
    </div>
  );
};

export default TOffer;
