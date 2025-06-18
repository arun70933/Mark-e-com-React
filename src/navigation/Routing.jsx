import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from '../components/Shop'
import Home from '../components/Home'
import ProductsDetails from '../productsDetails/ProductsDetails'
import Cart from '../components/Cart'

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
       
        <Route path='/:id' element={<ProductsDetails/>}/>
         <Route path='/shopPage' element={<Shop/>}/>
         <Route path='/cartPage' element={<Cart/>}/>
    </Routes>
  )
}
