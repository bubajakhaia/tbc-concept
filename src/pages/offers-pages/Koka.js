import React from "react";
import { useLanguage } from "../../components/context/LanguageContext";

const Koka = () => {
    const {language} = useLanguage
  return (
    <div
        className="container cafe-sm-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ borderRadius: "7px" }}
          src="https://static.tbcconcept.ge/desktop/media/whi3enlv.h0mScreenshot%202024-06-20%20164907.png"
          alt="hh"
        ></img>
        <div
          style={{
            width: "100%",
            maxWidth: "770px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              width: "100%",
              fontWeight: "700",
              marginTop: "60px",
            }}
          >
           {language==="ge"?"კოკა რამიშვილი - პლატფორმა მოვლენისთვის": "Koka Ramishvili – Platform for Event"}
          </h2>
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
        <div
          style={{
            color: "#050505",
            width: "100%",
            maxWidth: "770px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "300px",
            marginTop: "40px",
            marginBottom: "80px",
          }}
        >
         7 ივნისის, 18:00 საათიდან, თიბისი კონცეპტის მულტიფუნქციური სივრცე, მარჯანიშვილის 7-ში, რია ქებურიას ფონდთან თანამშრომლობით, უმასპინძლებს კოკა რამიშვილის გამოფენას პლატფორმა მოვლენისთვის.

კოკა რამიშვილი უახლესი ქართული მხატვრობის ისტორიის ერთ-ერთი ცენტრალური ფიგურაა. 

მისი შემოქმედება პოსტ-საბჭოთა პერიოდში განვითარდა და თავიდანვე გამოირჩეოდა რეფლექსიურობით, რთული კონტექსტის შესატყვისი ფორმებისა და მათი შესაბამისი მედიუმების ზუსტი შერჩევით.

ის მკვლევარი მხატვარია და ყოველთვის ორიგინალურ კავშირებს პოულობს კონკრეტულ პრობლემასა და აბსტრაჰირებულ მსჯელობას შორის. ხელოვანი ცხოვრობს და მუშაობს თბილისსა და ჟენევაში, მისი ნამუშევრები კი ინახება სხვადასხვა ქვეყნების კერძო და სამუზეუმო კოლექციებში.

გამოფენაზე წარმოდგენილი იქნება კოკა რამიშვილის ახალი ნამუშევარი - პლატფორმა მოვლენისთვის. ნამუშევრის ხმოვანი ნაწილი შექმნა კომპოზიტორმა ნიკა მაჩაიძემ, რომელთანაც ხელოვანი ხშირად თანამშრომლობს. პლატფორმა მოვლენისთვის მულტიმედიური ინსტალაციაა, სადაც უხილავი ბმები აერთიანებს ინტერიერსა და ექსტერიერს, გეომეტრიულ ფორმებს (წრიულსა და კვადრატულ დარბაზებს) და პეიზაჟის უსასრულობას, ზაფხულის კლიმატურ მოტივსა და ყოველდღიურობის ხმებს. 

გამოფენის გახსნა: 7 ივნისი, 18:00- 20:00 საათი

გამოფენის ხანგრძლივობა: 7 ივნისი - 13 ივლისი, 2024 
        </div>
      </div>
  );
};

export default Koka;
