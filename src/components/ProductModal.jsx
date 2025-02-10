import React from "react";
import headPhone from "../assets/headphone.png";
import weight from "../assets/weight.png";
import heart from "../assets/heart.png";

function ProductModal() {
  return (
    <>
      <div className="flex items-center justify-center bg-white h-screen">
        <div className="flex flex-col md:flex-row p-20 shadow-xl">
          <img
            src={headPhone}
            alt=""
            className="mx-auto duration-200 w-60 h-50 hover:scale-105"
          />
          <div className="flex flex-col">
            <p className="text-white border py-1 px-4 text-sm bg-black rounded-2xl text-center mb-3  w-fit">
              Free shipping
            </p>
            <h1 className="font-bold text-3xl">
              Razer Kraken Kitty Edt Gaming
            </h1>
            <h1 className="font-bold text-3xl mb-3">Headset Quartz</h1>
            <div className="line-through mb-3">$799</div>
            <div className="font-bold text-6xl mb-3">$599</div>
            <p className="text-sm font-light text-gray-400 mb-3">
              The offer is valid until April 3 or as long as stock lasts!
            </p>
            <button className=" mb-3 w-full  bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to cart
                </div>
            </button>
            <div className="flex flex-row items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <p className="items-center">50+ pcs in stock.</p>
            </div>
            <div className="flex flex-col space-y-4 justify-between md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex flex-row space-x-2 px-10 py-3 border-2 border-gray-300 rounded-xl items-center">
                <img src={weight} alt="" className="w-10 h-10" />
                <div className="text-lg">Add to cart</div>
              </div>

              <div className="flex flex-row space-x-2 px-10 py-3 border-2 border-gray-300 rounded-xl items-center">
                <img src={heart} alt="" className="w-10 h-10" />
                <div className="text-lg">Add to wishlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
