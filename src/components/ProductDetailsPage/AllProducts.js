import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
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
  return (
    <div className="mt-20 p-2 flex container mx-auto text-xl font-medium flex-col">
      <h1 className="uppercase mb-3">All Product</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {products?.map((product) => (
          <div key={product?.id}>
            <div className="flex border p-3">
                <img className="w-24 mr-5" src={product?.thumbnail}/>
                <div>
                    <h3>{product?.title}</h3>
                    <p className="product-price text-[#00ccff] mt-3 font-medium text-start mr-2">
                ${product?.price}
              </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
