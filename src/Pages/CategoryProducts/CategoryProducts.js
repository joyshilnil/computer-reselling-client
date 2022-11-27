import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryProductCard from './SingleCategoryProductCard';

const CategoryProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-7'>
            
            {
                products.map((product) => (
                    <SingleCategoryProductCard key={product._id} product={product}></SingleCategoryProductCard>
                ))
            }
        </div>
    );
};

export default CategoryProducts;