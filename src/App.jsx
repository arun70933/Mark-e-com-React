import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import BigDiscount from './homePages/BigDiscount'
import ProductsDetails from './productsDetails/ProductsDetails'

import Toggle from '../src/productsDetails/Toggle'
import Shop from './components/Shop'
import Routing from './navigation/Routing'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




export default function App() {
  return (
    <div>
      <Header/>
      <Routing/>
      <Footer/>
      <ToastContainer position='top-right' autoClose={2000} hideProgressBar={false} closeOnClick pauseOnHover/>

     
     
     
     

     
      
    
    </div>
  )
}
