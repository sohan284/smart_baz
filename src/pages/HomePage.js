import React from "react";
import AllCategories from "../components/HomePage/AllCategories";
import Navbar from "../shared/Navbar";
import ProductGroups from "../components/HomePage/ProductGroups";
import Footer from "../shared/Footer";

const HomePage = () => {
  return (
    <div>
        {/* navbar */}
      <Navbar title="Home" />
      <div className="grid grid-cols-3 lg:grid-cols-5 container mx-auto">
        {/* category list  */}
        <div className="col-span-1">
          <AllCategories />
        </div>
         {/* 3 groups of product  */}
        <div className="lg:col-span-4 col-span-2">
          <ProductGroups />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
