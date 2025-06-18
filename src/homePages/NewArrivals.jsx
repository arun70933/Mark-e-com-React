import React from 'react'
import Card from '../components/Card'
import {products} from '../../public/products'
export default function 
() {
  return (
  
    <div className="my-20">
            <h1 className="font-bold text-1xl text-center my-10 pb-10">New Arrivals</h1>
            <div className="flex mx-40   ms-45 flex-wrap gap-10 ">
                  {products.map((items)=>{
                return (items.category=="mobile"||items.category=="wireless")?<Card items={items}/>:"";
                       })}
             
            </div>
          </div>
  )
}
