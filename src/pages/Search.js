import React, { useState } from 'react';
import ProductsSlide from '../components/ProductsSlide';
import OffersSlider from '../components/OffersSlider';
import BigMsg from '../components/BigMsg';

const Search = () => {
  const [activeTab, setActiveTab] = useState("პროდუქტი");

  const rendered = () => {
    switch (activeTab) {
      case "პროდუქტი":
        return <ProductsSlide />;
      case "შეთავაზება":
        return <OffersSlider />;
      case "ღონისძიებები":
        return "Loading...";
      default:
        return null;
    }
  };

  return (
    <><BigMsg>რას ეძებთ?</BigMsg>
    <div className='container'>
        
        <input type='text' placeholder='🔍 search' style={{border:"1px solid grey",marginTop:"40px", borderRadius:"5px", height:"60px", backgroundColor:"#f9fafa"}}/>
        <div style={{display:"flex",gap:"30px",marginTop:"50px"}} >
            <div onClick={() => setActiveTab("პროდუქტი")}>პროდუქტი</div>
      <div onClick={() => setActiveTab("შეთავაზება")}>შეთავაზება</div>
      <div onClick={() => setActiveTab("ღონისძიებები")}>ღონისძიებები</div></div>
      
      <div>
        {rendered()}
      </div>
    </div>
    </>
  );
};

export default Search;