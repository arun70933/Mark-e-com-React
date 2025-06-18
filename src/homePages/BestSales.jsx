import React from 'react'
import {products} from '../../public/products'
import Card from '../components/Card'

export default function BestSales() {
  return (
    
     <div className="my-20">
                <h1 className="font-bold text-1xl text-center my-10 pb-10">Best Sales</h1>
                <div className="flex mx-40   ms-45 flex-wrap gap-10 ">
                              {products.map((items)=>(items.category=="sofa"||items.category=='chair')?<Card items={items}/>:"")}
                 
                </div>
              </div>
  )
}
