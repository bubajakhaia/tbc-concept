import React from 'react'
import NavStatus from '../components/NavStatus'
import TextImgLayout from '../components/TextImgLayout'
import BankerHomePage from '../components/BankerHomePage'
import OffersSlider from '../components/OffersSlider'
const ProductKits = () => {
  return (
    <div className='product-kits-page'>
      <NavStatus/>
      <TextImgLayout/>
      <BankerHomePage isButton={true}/>
      <OffersSlider />
    </div>
  )
}

export default ProductKits
