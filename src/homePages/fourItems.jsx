import React from 'react'

import { FaCar } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
const serviceData = [
  {
    icon: <FaCar/> ,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <IoCard/>,
    title: "Safe Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <FaShieldAlt/>,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: <FaHeadphones/>,
    title: " Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];
export default function () {
     
  return (
    <>
  
     <div class='flex flex-row  ms-40 gap-3 my-10 ' >
        {serviceData.map((items)=>
        <div class='text-center  px-12 py-8 flex flex-col gap-3 'style={{backgroundColor:`${items.bg}`}} >
            <span class='mx-auto text-2xl bg-white rounded-full p-2'>
                {items.icon}
            </span>
            <h4>{items.title}</h4>
            <p>{items.subtitle}</p>
        </div>)}
   
     </div>
   </>
   
  )
}
