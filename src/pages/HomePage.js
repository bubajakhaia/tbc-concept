import React from 'react'
import SubscribeKit from '../components/SubscribeKit'
import NavStatus from '../components/NavStatus'
import BigMsg from '../components/BigMsg'
import SelectPackageDisplay from '../components/SelectPackageDisplay'
import Stats from '../components/Stats'
import OffersSlider from '../components/OffersSlider'
import GetApp from '../components/GetApp'
import ProductsSlide from '../components/ProductsSlide'
import BankerHomePage from '../components/BankerHomePage'
import Awards from '../components/Awards'
import { swiperSlides } from "../data/offersData";
import { useLanguage } from '../components/context/LanguageContext'
const HomePage = () => {
  const {language} = useLanguage();

  return (
    <main className='main-page'>
    <div >
      <NavStatus/>
    </div>
    <div>
      <SubscribeKit />
    </div>
    <BigMsg>{language==="ge"?"გამოიწერეთ თიბისი კონცეპტის ნაკრები და ისარგებლეთ როგორც საბანკო, ისე არასაბანკო უპირატესობებით.":
      "Subscribe to the TBC concept package and enjoy both banking and non-banking advantages."}</BigMsg>
    <SelectPackageDisplay />
    <Stats />
    <OffersSlider swiperSlides={swiperSlides} />
    <GetApp/>
    <ProductsSlide />
    <BankerHomePage isButton={true}/>
    <Awards/>
    </main>
  )
}

export default HomePage

