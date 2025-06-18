import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart,increaseQty,decreaseQty} from '../Redux/ProductSlice'
export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartItems.cart);

const totalPrice=items.reduce((acc,item)=>acc+item.price*item.quantity,0)

  return (
    <div className='cart-page'>
        {items.length===0?(
          <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Cart Items Section */}
        <div className="flex-1 border rounded-xl p-6 shadow-sm bg-white h-49">
          <h5>No Items are add in Cart</h5>
          </div>


        {/* Cart Summary Section */}
        <div className="w-full md:w-1/3 border rounded-xl p-6 shadow-sm bg-white h-fit">
          <h4 className="text-xl font-semibold mb-2">Cart Summary</h4>
          <hr className="mb-4" />
          
          <div className="mb-4">
            <span className="font-medium text-gray-700">Total Price:</span> 
             <h4 className="text-green-600 font-bold">₹0.00</h4>
          </div>
          
        </div>

      </div>
    </div>
          
            ):
            (<div className="p-6">
      <div className="flex flex-col md:flex-row gap-6 justify-around">
        
        {/* Cart Items Section */}
        <div className="flex-1 ">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-start border rounded-xl p-4 shadow-sm bg-white">
              <img src={item.imgUrl} alt={item.productName} className="w-40 object-cover rounded-md" />
              
              <div className="flex-1  md:ml-6 mt-4 md:mt-0 w-full ">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{item.productName}</h3>
                  <IoCloseSharp
                    className="text-2xl text-black cursor-pointer"
                   
                  />
                </div> 
                <div className='flex pt-4'>
                  <div className="">
                <p className='text-1xl w-30'>${item.price} * {item.quantity}</p> 
                </div>
               
                <p className='text-1xl font-bold '>${(item.price*item.quantity)}</p>
            
                 <div className="flex items-center gap-3 ms-120 ">
                      <button
                      
                      className="p-1 border-gray-100   hover:bg-gray-200"
                    >
                      <FaPlus />
                    </button>
                  
                    <button
                     
                     className="p-1 border-gray-100   hover:bg-gray-200"
                    >
                      <FaMinus />
                    </button>
                    {/* <span>{item.quantity}</span> */}
                  
                  </div>
                </div>

               
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary Section */}
        <div className="w-full md:w-1/3 border rounded-xl p-6 shadow-sm bg-white h-fit ">
          <h4 className="text-xl font-semibold mb-2">Cart Summary</h4>
          <hr className="mb-4" />
          
          <div className="  mb-4">
            <span className="font-medium text-gray-700">Total Price:</span> 
             <h4 className="text-green-600 font-bold">${totalPrice}</h4>
          </div>
          
        </div>

      </div>
    </div>)
    }
    </div>
  );
}
