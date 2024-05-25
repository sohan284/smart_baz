import React, { useEffect, useState } from "react";
import ProductGroup from "./ProductGroup/ProductGroup";
import { useNavigate } from "react-router-dom";

const ProductGroups = () => {
    const navigate = useNavigate()
    const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/78`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setProductDetails(result);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        {/* group of products  */}
      <ProductGroup title="Laptop" category="laptops" />
      <div className="flex mt-20 justify-between bg-[#ffdfc0]">
        <div className="mt-12 ml-5">
            <h1 className="text-3xl  font-semibold">{productDetails?.title}</h1>
            <button onClick={()=>navigate('/details/78')} className="bg-[#ff8800] hover:bg-[#ff9a27] py-5 px-12 mt-10 text-white uppercase font-medium text-md">Shop Now</button>
        </div>
        <div>
            <img src={productDetails?.thumbnail}/>
        </div>
      
      </div>
      <ProductGroup title="Sunglass" category="sunglasses" />
      <ProductGroup title="SmartPhone" category="smartphones" />
    </div>
  );
};

export default ProductGroups;
