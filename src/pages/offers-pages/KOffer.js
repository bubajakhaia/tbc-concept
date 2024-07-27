import React from "react";
import OffersSlider from "../../components/OffersSlider";

const DOffer = () => {
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
          Colosseum Marina Hotel – 15%-იანი ფასდაკლება
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
          src="https://static.tbcconcept.ge/desktop/media/ejkctmbi.mrscolloseum%201.png"
        />
      </div>
      <div style={{ margin: "50px auto", padding: "40px 120px" }}>
        <p>გამარჯობა,</p>
        <p>
          თიბისი კონცეპტის Visa ბარათის მფლობელებს, შესაძლებლობა გაქვთ,
          ისარგებლოთ 15%-იანი ფასდაკლებით სასტუმრო „კოლიზეუმ მარინა“-ში ოთახის
          დაჯავშნისას. ხუთვარსკვლავიანი სასტუმრო „კოლიზეუმ მარინა“ ბათუმში
          აერთიანებს კეთილმოწყობილ პლაჟს, საცურაო აუზებს, კომფორტულ ოთახებს,
          რესტორნებს, ბარებს, სპას და სხვ. ფასდაკლება არ მოქმედებს სხვა
          ფასდაკლებებთან და აქციებთან ერთად. შეთავაზება ძალაშია 2024 წლის 30
          სექტემბრის ჩათვლით. შეთავაზება ვრცელდება შემდეგ სადებეტო ბარათებსა და
          მათ ციფრულ ანალოგებზე: TBC Concept Visa Platinum და Visa Signature.
        </p>
      </div>
      <div>
        <OffersSlider />
      </div>
    </div>
  );
};

export default DOffer;
