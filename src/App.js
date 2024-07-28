import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductOverview from "./pages/ProductOverview";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import FooterContent from "./components/FooterContent";
import FooterBottom from "./components/FooterBottom";
import PersonalBanker from "./pages/PersonalBanker";
import ProductKits from "./pages/ProductKits";
import LifestyleOverview from "./pages/LifestyleOverview";
import LifestyleOffersv2 from "./pages/LifestyleOffersv2";
import LifestyleEvents from "./pages/LifestyleEvents";
import ConceptSpace from "./pages/ConceptSpace";
import ConceptCafe from "./pages/ConceptCafe";
import ConceptLibrary from "./pages/ConceptLibrary";
import ConceptBranches from "./pages/ConceptBranches";
import FloatingMenu from "./components/FloatingMenu";
import ProductPremium from "./pages/ProductPremium";
import { useLanguage } from './components/context/LanguageContext';
import PageNotFound from "./pages/PageNotFound";
import TOffer from "./pages/offers-pages/TOffer";
import COffer from "./pages/offers-pages/COffer";
import ZOffer from "./pages/offers-pages/ZOffer";
import KOffer from "./pages/offers-pages/KOffer";
import usePageTitle from "./useTitle";

function App() {
  usePageTitle();
  const {language, changeLanguage:setLanguage} = useLanguage();

  return (
    <div className="App">
      
      <div className="nav-fix">
        
        <Navigation language={language} setLanguage={setLanguage} />
      </div>
      <div className="to-pad">
      </div>
      <Routes>
        
        <Route path="*" element={<PageNotFound/>}  />
        <Route path="/" index element={<HomePage className="homepage-className" />}  />
        <Route path="/ge" index element={<HomePage className="homepage-className" />}  />
        <Route path="/eng" element={<HomePage className="homepage-className" />}  />
        <Route path="/ge/products/overview" element={<ProductOverview />} />
        <Route path="/eng/products/overview" element={<ProductOverview />} />
        <Route path="/ge/products/kits" element={<ProductKits />} />
        <Route path="/eng/products/kits" element={<ProductKits />} />
        <Route path="/ge/products/personalbanker" element={<PersonalBanker />} />
        <Route path="/eng/products/personalbanker" element={<PersonalBanker />} />
        <Route path="/ge/lifestyle/overview" element={<LifestyleOverview  />} />
        <Route path="/eng/lifestyle/overview" element={<LifestyleOverview  />} />
        <Route path="/ge/lifestyle/offers" element={<LifestyleOffersv2 />} />
        <Route path="/eng/lifestyle/offers" element={<LifestyleOffersv2/>} />
        <Route path="/ge/lifestyle/events" element={<LifestyleEvents />} />
        <Route path="/eng/lifestyle/events" element={<LifestyleEvents />} />
        <Route path="/ge/concept-space/overview" element={<ConceptSpace />} />
        <Route path="/eng/concept-space/overview" element={<ConceptSpace />} />
        <Route path="/ge/concept-space/cafe" element={<ConceptCafe />} />
        <Route path="/eng/concept-space/cafe" element={<ConceptCafe />} />
        <Route path="/ge/concept-space/library" element={<ConceptLibrary />} />
        <Route path="/eng/concept-space/library" element={<ConceptLibrary />} />
        <Route path="/ge/concept-space/concept-branches" element={<ConceptBranches />} />
        <Route path="/eng/concept-space/concept-branches" element={<ConceptBranches />} />
        <Route path="/ge/singleview/3300-premium-kit" element={<ProductPremium header="პრემიუმი" text="თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი - პრემიუმ ნაკრები, სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად, პირადი ბანკირის მომსახურებას გულისხმობს. პირადი ბანკირის მთავარი ამოცანა მომხარებლისთვის ცხოვრების გამარტივება და მისთვის უმაღლესი ხარისხის მომსახურების უზრუნველყოფაა." imageUrl="https://static.tbcconcept.ge/desktop/media/hyd4xtnn.x2tprem.png"/>} />
        <Route path="/eng/singleview/3300-premium-kit" element={<ProductPremium header="პრემიუმი" text="თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი - პრემიუმ ნაკრები, სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად, პირადი ბანკირის მომსახურებას გულისხმობს. პირადი ბანკირის მთავარი ამოცანა მომხარებლისთვის ცხოვრების გამარტივება და მისთვის უმაღლესი ხარისხის მომსახურების უზრუნველყოფაა." imageUrl="https://static.tbcconcept.ge/desktop/media/hyd4xtnn.x2tprem.png"/>} />
        <Route path="/ge/singleview/245-digital-kit" element={<ProductPremium header="ციფრული" text="თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია, ვინც აქტიურად მოიხმარს არასაბანკო პროდუქტებსა და შეთავაზებებს და ვისაც ურჩევნია დამოუკიდებლად, პირადი ბანკირის გარეშე მართოს საკუთარი ფინანსები და საბანკო ოპერაციები." imageUrl="https://static.tbcconcept.ge/desktop/media/rzg2rfa2.s1d430128849_7213815365374065_9017687812435872577_n.png"/>} />
        <Route path="/eng/singleview/245-digital-kit" element={<ProductPremium header="ციფრული" text="თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია, ვინც აქტიურად მოიხმარს არასაბანკო პროდუქტებსა და შეთავაზებებს და ვისაც ურჩევნია დამოუკიდებლად, პირადი ბანკირის გარეშე მართოს საკუთარი ფინანსები და საბანკო ოპერაციები." imageUrl="https://static.tbcconcept.ge/desktop/media/rzg2rfa2.s1d430128849_7213815365374065_9017687812435872577_n.png"/>} />
        <Route path="/ge/singleview/3301-concept-360" element={<ProductPremium header="360" text="თიბისი კონცეპტის 360 ნაკრები განკუთვნილია მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპიტარესობებთან ერთად, კიდევ უფრო მეტი ფინანსური ინსტრუმენტი და გაზრდილი შესაძლებლობები ესაჭიროება" imageUrl="https://static.tbcconcept.ge/desktop/media/d51wfmid.pg4360.png"/>} />
        <Route path="/eng/singleview/3301-concept-360" element={<ProductPremium header="360" text="თიბისი კონცეპტის 360 ნაკრები განკუთვნილია მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპიტარესობებთან ერთად, კიდევ უფრო მეტი ფინანსური ინსტრუმენტი და გაზრდილი შესაძლებლობები ესაჭიროება" imageUrl="https://static.tbcconcept.ge/desktop/media/d51wfmid.pg4360.png"/>} />
        <Route path="/ge/lifestyle/offers/singleview/4563-" element={<TOffer />} />
        <Route path="/eng/lifestyle/offers/singleview/4563-" element={<TOffer />} />
        <Route path="/ge/lifestyle/offers/singleview/4558-colosseum" element={<COffer />} />
        <Route path="/eng/lifestyle/offers/singleview/4558-colosseum" element={<COffer />} />
        <Route path="/ge/lifestyle/offers/singleview/4561-" element={<ZOffer />} />
        <Route path="/eng/lifestyle/offers/singleview/4561-" element={<ZOffer />} />
        <Route path="/ge/lifestyle/offers/singleview/4560-" element={<KOffer />} />
        <Route path="/eng/lifestyle/offers/singleview/4560-" element={<KOffer />} />

      </Routes>
      <FloatingMenu/>
      <div className="footer-wrapper">
      <Footer language={language} setLanguage={setLanguage} />
      <FooterContent language={language} />
      <FooterBottom />
      </div>
    </div>
  );
}

export default App;
