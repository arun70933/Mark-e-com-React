import React from 'react'
import Card from '../components/Card'
import {discoutProducts} from '../../public/products.jsx'


export default function BigDiscount() {
    
  return (
    <>
    <div className="my-20">
        <h1 className="font-bold text-1xl text-center my-10 mb-5">Big Discount</h1>
        <div className="flex mx-40   ms-45 flex-wrap gap-10 ">
            {discoutProducts.map((items)=><Card items={items}/>)}
         
        </div>
      </div>
    
    </>
 
  )
}
