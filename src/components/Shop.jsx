import React, { useState } from 'react';
import { products } from '../../public/products';
import Card from '../components/Card';
import table from '../../public/Images/table.jpg'
import { CiSearch } from "react-icons/ci";
export default function Shop() {
  const [specificPro, setSpecificPro] = useState("");
  const [search, setSearch] = useState("");

  function handleCategory(e) {
    setSpecificPro(e.target.value);
  }

  function SearchHandle(e) {
    setSearch(e.target.value);
  }

  const filteredProducts = products.filter((item) => {
    const matchesCategory = specificPro === "" || item.category === specificPro;
    const matchesSearch = search === "" || item.productName.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div
       className="w-full h-60 text-white text-center flex items-center justify-center bg-cover bg-center"
       style={{ backgroundImage: `url(${table})`,
        backgroundSize: "cover",
  backgroundRepeat:" no-repeat",
  backgroundPosition: "left",
  justifyContent: "center",
  backgroundColor: "rgba(22, 21, 21, 0.5)",
  backgroundBlendMode: "darken"
}}
     >
       <h1 className="text-3xl font-bold   px-4 py-2 rounded">
         Products
       </h1>
     </div>
     


      <div className='ms-25 mt-10 mb-6 flex justify-between gap-6 px-10'>
        <select
          onChange={handleCategory}
          className='border w-52 h-10 bg-blue-950 text-white rounded-md px-2'
        >
          <option value="">Filter By Category</option>
          <option value="sofa">Sofa</option>
          <option value="chair">Chair</option>
          <option value="watch">Watch</option>
          <option value="mobile">Mobile</option>
          <option value="wireless">Wireless</option>
        </select>
        <div className='border-none px-3 py-2  w-180 bg-gray-100 rounded-xl flex '>
        <input 
          type="text"
          placeholder='Search...'
          onChange={SearchHandle}
          className='focus:outline-none'
          value={search}/>
          <span className='font-bold ps-123 pt-1'><CiSearch/></span>
        </div>
      </div>

      

          <div className="my-20">
                   
                    <div className="flex mx-40   ms-45 flex-wrap gap-10 ">
                      
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <Card key={index} items={item} />
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">No products found.</p>
        )}
                        
                     
                    </div>
                  </div>
      
    </>
  );
}
