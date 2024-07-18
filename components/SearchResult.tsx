import React from 'react';
import ProductCards from './ProductCards';

const SearchResult = ({ filterData }: { filterData: any }) => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='mt-10'>
        <div>
          <h1 className='font-bold text-2xl'>Results {filterData.length}</h1>
          <p>Price and other details may vary based on product size and colour.</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
          {filterData?.map((product: any) => (
            <div key={product.id}>
              <ProductCards product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
