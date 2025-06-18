import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/ProductSlice";
import { toast } from "react-toastify";

export default function Card({ items }) {
  const dispatch = useDispatch();

  return (
    <div className="group relative flex flex-col gap-3 w-90 p-5 border border-gray-200 shadow-md rounded-xl transition-transform duration-300 hover:shadow-lg">

      {/* Discount badge */}
      {items.discount && (
        <span className="bg-blue-700 w-fit text-white py-0.5 px-2 rounded-full text-sm">
          {items.discount}% off
        </span>
      )}

      {/* Product image */}
      <Link to={`/${items.id}`}>
        <img src={items.imgUrl} className="w-100  object-cover" alt={items.productName} />
      </Link>

      {/* Product title */}
      <h5 className="my-1 font-semibold">{items.productName}</h5>

      {/* Star rating */}
      <div className="flex gap-2 text-amber-300">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* Price and Add to Cart */}
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-semibold">${items.price}</h4>
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-blue-900 hover:text-white transition-colors duration-200 cursor-pointer"
          onClick={() => {
            dispatch(addToCart({ ...items, quantity: 1 }));
            toast.success("Product has been added to cart!");
          }}
        >
          <FaPlus className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
