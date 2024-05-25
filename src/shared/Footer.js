import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#196d94] mt-24">
      <div className="container flex mx-auto text-center flex-col py-12">
        <h1 className="text-white py-8 font-medium text-4xl">
          Subscribe to our newsletter
        </h1>
        <p className="text-medium text-gray-100">
          It was popularised with the release of Letraset sheets containing
          Lorem <br /> passages
           and more recently with desktop publishing
        </p>
        <div>
          <input placeholder="Email Address" className="py-5 px-8 mt-8 w-[30%]" />
          <button className="bg-[#ff8800] py-5 px-12 text-white uppercase font-medium text-md">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
