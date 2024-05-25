import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCategories(result);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, []); //
  return (
    <div>
      <h1 className="text-2xl font-medium my-8">All Category</h1>
      <ul className="bg-white shadow-2xl border p-3 mr-10">
        {categories?.map((category) => (
          <li className="my-2 text-gray-500 font-medium overflow-clip" key={category?.slug}>{category?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllCategories;
