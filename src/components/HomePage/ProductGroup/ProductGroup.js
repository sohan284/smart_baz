import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGroup = ({ title, category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setProducts(result?.products);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, []);
  console.log(products);
  return (
    <div>
      <h1 className="text-2xl font-medium my-8">{title}</h1>
      <div className="grid lg:grid-cols-4 gap-5 grid-cols-1 sm:grid-cols-2">
        {products.slice(0,4).map((product) => (
          <ProductCard
            key={product?.id}
            title={product?.title}
            imageUrl={product?.thumbnail}
            rating={product?.rating}
            price={product?.price}
            id={product?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGroup;
