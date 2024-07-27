import React from "react";
import NavStatus from "../components/NavStatus";
import BankerHomePage from "../components/BankerHomePage";
import "./ProductOverview.css";
import Awards from "../components/Awards";

const PersonalBanker = () => {
  return (
    <div className="personal-banker-page">
      <NavStatus />

      <BankerHomePage isButton={null} />
      <div className="personal-banker-text">
        <p>
          თიბისი კონცეპტის პრემიუმ და 360 ნაკრებები, სხვა არასაბანკო
          უპირატესობებთან ერთად, პირადი ბანკირის მომსახურებას გულისხმობს. პირადი
          ბანკირი მომხმარებლის სანდო პარტნიორი, შეუცვლელი დამხმარე და მრჩეველია,
          რომლის მთავარი ამოცანაც მომხმარებლისთვის ცხოვრების გამარტივება,
          მისთვის კმაყოფილებისა და კომფორტის უზრუნველყოფაა. პირადი ბანკირი
          ითვალისწინებს მომხმარებლის ფინანსურ მოთხოვნილებებსა და საჭიროებებს,
          მისთვის უზრუნველყოფს როგორც ოპერატიულ ფინანსურ კონსულტაციას, ასევე
          ხარისხიან მომსახურებას.
        </p>
        <p>პირადი ბანკირი</p>
        <ul>
          <li>დაგიზოგავთ დროს და ფინანსების სწორად მართვაში დაგეხმარებათ</li>
          <li>გაგიწევთ სრულფასოვან საოპერაციო და საკრედიტო მომსახურებას</li>
          <li>მუდმივად მოგაწვდით თქვენთვის საინტერესო შეთავაზებებს.</li>
        </ul>
      </div>
      <Awards/>
    </div>
  );
};

export default PersonalBanker;
