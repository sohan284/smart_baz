import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#196d94]">
      <div className="container flex justify-between mx-auto">
        <h1 className="text-white py-8 font-medium text-2xl">Shop - {title}</h1>
        <div>
          {title === "Product Details" && (
            <button
              onClick={() => navigate("/")}
              className="bg-[#ff8800] hover:bg-[#ff7b00] uppercase text-white font-medium py-3 text-xs m-8 px-5"
            >
              {" "}
              Back to Home Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
