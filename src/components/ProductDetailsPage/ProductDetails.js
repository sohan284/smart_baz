import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
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
    <div className="flex flex-col mx-auto container p-2">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 border-8 border-blue-500 mt-5">
        <div className="mt-8 border-blue-400 border-4 border-dotted border-l-0 mr-5 mb-16">
          <img className="w-[80%]" src={productDetails?.thumbnail} />
          <div className="grid grid-cols-5 gap-5 border pt-5">
            {productDetails?.images?.map((image) => (
              <div className="border shadow-sm">
                <img className="" src={image} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col border-blue-400 border-4 border-r-0 border-dotted mt-8 p-1">
            <div className="flex">
              <ReactStars
                count={5}
                value={productDetails?.rating}
                size={24}
                activeColor="#ff7b00ef"
                edit={false}
              />
              <div className="flex flex-col justify-center ml-2 text-gray-700 text-sm font-medium">
                {" "}
                {productDetails?.rating} star Rating
              </div>
            </div>
            <h2 className="text-xl mt-1">{productDetails?.title}</h2>
            <h3 className="mb-2 mt-5 font-medium">
              <span className="text-gray-400 mr-1">Brand:</span>{" "}
              {productDetails?.brand}
            </h3>
            <h3 className="my-3 mb-5 font-medium">
              <span className="text-gray-400 mr-1">Category:</span>{" "}
              {productDetails?.category}
            </h3>
            <div className="flex pb-5">
              <p className="product-price text-[#00ccff] font-medium text-2xl text-start mr-2">
                ${productDetails?.price}
              </p>
              <p className="bg-[#ffd900e3] p-1 px-2 font-medium border shadow-sm text-gray-700 text-sm">
                {productDetails?.discountPercentage}% OFF
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border mt-5">
        <h2 className="border p-5 text-2xl font-medium">Product Description</h2>
        <div className="p-8">
            <h2 className="text-xl font-medium mb-4">Description</h2>
            <p className="text-gray-600">{productDetails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
