import React from "react";
import ProductGroup from "./ProductGroup/ProductGroup";

const ProductGroups = () => {
  return (
    <div>
      <ProductGroup title="Laptop" category="laptops" />
      <ProductGroup title="Sunglass" category="sunglasses" />
      <ProductGroup title="SmartPhone" category="smartphones" />
    </div>
  );
};

export default ProductGroups;
