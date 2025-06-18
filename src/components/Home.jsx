import React from 'react'
import FourItems from '../homePages/fourItems'
import CarouselComponent from '../homePages/CarouselComponent'
import Card from './Card'
import BigDiscount from '../homePages/BigDiscount'
import NewArrivals from '../homePages/NewArrivals'
import BestSales from '../homePages/BestSales'

export default function Home() {
  return (
    <div>
     
        <CarouselComponent/>
          <FourItems/>  
         <BigDiscount/>
         <NewArrivals/>
         <BestSales/>
    </div>
  )
}
