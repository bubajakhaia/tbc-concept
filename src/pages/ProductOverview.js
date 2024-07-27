import React from 'react'
import SubscribeKit from '../components/SubscribeKit'
import NavStatus from '../components/NavStatus'
import BigMsg from '../components/BigMsg'
import ProductsSlide from '../components/ProductsSlide'
import BankerHomePage from '../components/BankerHomePage'
import GetApp from '../components/GetApp'
import "./ProductOverview.css"
const ProductOverview = () => {
  return (
    <div className='product-overview-page'>
      <NavStatus/>
      <SubscribeKit />
      <BigMsg/>
      <ProductsSlide/>
      <BankerHomePage isButton={true}/>
      <div className="product-overview-padding">
      <GetApp/>
      </div>
    </div>
  )
}

export default ProductOverview
