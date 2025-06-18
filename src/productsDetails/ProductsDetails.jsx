import {react ,useState} from 'react'
import { products } from '../../public/products'
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import Toogle from './Toggle'
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/ProductSlice";
import {toast} from 'react-toastify'
import Card from '../components/Card'
import table from '../../public/Images/table.jpg'
export default function ProductsDetails() {
  const {id}=useParams();
console.log("useParams",useParams);
  const dispatch=useDispatch()
  const product=products.filter((items)=>items.id==id);
  const requiredProductsFilter=products.filter((items)=>items.category===product[0].category && items.id!==product[0].id)
  // const requiredProductsFilter=requiredProducts.filter((items)=>items.id!==product.id)
  console.log('requiredProductsFilter',requiredProductsFilter);
  
console.log("product",product);
  const [quantity,setQuantity]=useState(1);
  const handleAddToCArt=()=>{
    const productWithQunatity={
      ...product[0],
      quantity:parseInt(quantity)||1
    };
    dispatch(addToCart(productWithQunatity));
    toast.success(`Added ${quantity} item(s) to cart`)
  }


  return (

   
  <div>
    
        
      <div>        
       <div
  className="w-full h-60 text-white text-center flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${table})` }}
>
  <h1 className="text-3xl font-bold   px-4 py-2 rounded">
    {product[0].productName}
  </h1>
</div>

            <div className='flex mt-20'>
                <div>
                <img src={product[0].imgUrl} alt="productImage" className='w-180 ms-10'/>
                </div>
                <div className='flex flex-col ps-10 pe-20 w-50'>
                    <h1>{product[0].productName}</h1>
                     <div className="flex">
                        <div className='flex gap-2 text-amber-300 mt-1'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <div className='ms-10'>
                            <p className='text-black-500'>{product[0].avgRating} ratings</p>
                        </div>
                       
                </div>

                <div class='flex'>
                <h5 className='font-bold'>${product[0].price}</h5>
                <p className='ms-14'>category:{product[0].category}</p>
                </div>
                <p>{product[0].shortDesc}</p>
                <input type="number" defaultValue='1' value={quantity} className='border-1 w-20 ps-3 mt-4' style={{borderRadius:"5px"}}/>
                <button className='bg-blue-950 w-30 py-2 text-white mt-3 ' style={{borderRadius:"5px"}} onClick={handleAddToCArt}>Add To Cart</button>

                </div>
            </div> 

            
   
    <div className="my-20">
                   <h4 className="font-bold text-1xl text-center my-10 pb-10">You might also like</h4>
                   <div className="flex mx-40   ms-45 flex-wrap gap-10 ">
                                 {requiredProductsFilter.map((items)=><Card items={items}/>)}
   
                   </div>
                 </div>
            
        </div>
       
        


</div>
)}