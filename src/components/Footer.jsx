import React from 'react'
import { IoBag } from "react-icons/io5";

export default function Footer() {
  return (

<footer className="bg-blue-950 text-white pt-12 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
     
      <div className="space-y-4">
        <div className="flex items-center font-bold">
          <span className='text-2xl'><IoBag/></span>
          <span className="ml-2 text-2xl font-bold">MART</span>
        </div>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi laudantium corrupti accusamus ex ut consequuntur fugit reiciendis facere dignissimos nesciunt, id quasi facilis sequi, cumque itaque repellat quibusdam </p>
      </div>

    
      <div className="space-y-4">
        <h5 className=" font-semibold ms-4">About Us</h5>
        <ul className="space-y-2">
          <li><p className="text-gray-400 hover:text-white transition">Careers</p></li>
          <li><p className="text-gray-400 hover:text-white transition">Our Stores</p></li>
          <li><p className="text-gray-400 hover:text-white transition">Our Cares</p></li>
          <li><p className="text-gray-400 hover:text-white transition">Terms & Conditions</p></li>
          <li><p className="text-gray-400 hover:text-white transition">Privacy Policy</p></li>
        </ul>
      </div>


      <div className="space-y-4">
        <h5 className=" font-semibold ms-4">Customer Care</h5>
        <ul className="space-y-2">
          <li><p className="text-gray-400 hover:text-white transition">Help Center</p></li>
          <li><p className="text-gray-400 hover:text-white transition">How to Buy</p></li>
          <li><p className="text-gray-400 hover:text-white transition">Track Your Order</p></li>
          <li><p className="text-gray-400 hover:text-white transition">Corporate & Bulk Purchasing</p></li>
          <li><p className="text-gray-400 hover:text-white transition">Return & Refunds</p></li>
        </ul>
      </div>

    
      <div className="space-y-4">
        <h5 className=" font-semibold">Contact Us</h5>
        <address className="not-italic text-gray-400">
          <p>70 Washington Square South,<br/>
          New York, NY 10012, United States</p>
          <p className="mt-2">Email: example@gmail.com</p>
          <p>Phone: +1 1123 456 780</p>
        </address>
      </div>
    </div>

   
  </div>
</footer>
    
  )
}
