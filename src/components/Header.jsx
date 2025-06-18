import React from 'react'
import { IoBag } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function () {
    const items = useSelector((state) => state.cartItems.cart);
    const uniqCountItem=items.length;
  
 return (
<div className='mb-18'>
      <nav className="bg-white shadow-md  py-2 flex items-center justify-between position-fixed w-100 z-17 top-0 ">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-2 ps-20">
       <IoBag  size={28} />
       <Link to='/' style={{textDecoration:"none"}}><h2 className="text-2xl font-bold text-black  ">MART</h2></Link> 
      </div>

      {/* Right side: Navigation links */}
      <div className="flex space-x-6 pt-3 font-bold gap-10 ">
        <Link to="/" style={{textDecoration:"none"}}>
  <p className="text-black no-underline hover:text-blue-600" style={{textDecorationColor:"white"}}>Home</p>
</Link>
<Link to="/shopPage" style={{textDecoration:"none"}}>
  <p className="text-black no-underline hover:text-blue-600">Shop</p>
</Link>
<Link to="/cartPage" style={{textDecoration:"none"}}>
  <p className="text-black  hover:text-blue-600">Cart</p>
</Link>
     
        <div className='flex  gap-4 text-2xl pe-20'>
        <IoPerson className="text-3xl"/>
       <div className="relative">
       <Link to='/cartPage' className='text-black'>  <IoMdCart className="text-3xl" /></Link>
  <span className="absolute -top-2 -right-2 bg-blue-950 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
    {uniqCountItem}
  </span>
</div>
        
      </div>
      </div>
      
    </nav>
</div>
  );
}
    


