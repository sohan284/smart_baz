import React, { useEffect } from 'react';
import ProductCard from './ProductCard/ProductCard';

const AllProducts = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products ');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result);
          } catch (error) {
          
          } finally {
           
          }
        };
    
        fetchData();
      }, []); //
    return (
        <div>
            
        </div>
    );
};

export default AllProducts;