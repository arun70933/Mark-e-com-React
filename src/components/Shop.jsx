import React, { useState } from 'react';
import { products } from '../../public/products';
import Card from '../components/Card';

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
      <div className='w-full h-55 bg-blue-500 text-white text-center pt-15'>
        <h1 className='text-3xl font-bold'>Products</h1>
      </div>
     


      <div className='ms-25 mt-10 mb-6 flex gap-6 px-10'>
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

        <input
          type="text"
          placeholder='Search by product name...'
          className='border px-3 py-2 rounded-md w-64'
          onChange={SearchHandle}
          value={search}
        />
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
