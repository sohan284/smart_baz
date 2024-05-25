// ProductCard.js
import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ imageUrl, title, rating, price, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/details/${id}`)}
      className="border shadow-md flex flex-col justify-between p-5"
    >
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="mt-5 right-0">
        <div className="flex">
          {" "}
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor="#ff7b00ef"
            edit={false}
          />
          <div className="flex flex-col justify-center ml-2 text-gray-400 text-sm font-medium">
            {" "}
            ({rating})
          </div>
        </div>
        <h3 className="text-start mb-2">{title}</h3>
        <p className="product-price text-[#00ccff] font-medium text-start">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
