import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ProductDetails from "../components/ProductDetailsPage/ProductDetails";
import AllProducts from "../components/ProductDetailsPage/AllProducts";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar title="Product Details" />
      <ProductDetails />
      <AllProducts/>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
