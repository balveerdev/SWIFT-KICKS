import React, { useEffect, useState } from 'react';
import { imgContainer } from "../components/imagesfile";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Popular = () => {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('myCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
    toast.success("Product added to cart!");
  };

  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
         {/* Close / Back Button */}
      <button
        onClick={() => navigate(-1)} // or navigate("/") to go home
        className="self-start mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        ← Back
      </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Popular Products</h2>

        <div className="grid grid-cols-1 ml-14 xs:ml-0 md:ml-10 2md:ml-5 lg:ml-0 xs:grid-cols-2 2xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 2md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-4 mt-6 mx-auto">
          {imgContainer.map((value, index) => (
            <div
              key={index}
              className="w-full max-w-[180px] bg-[#f4f4f4] rounded-xl relative border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={value.src}
                id={value.id}
                alt={value.title}
                className="w-full h-[160px] object-cover rounded-t-xl"
              />

              <p className="font-semibold text-sm px-3 pt-2">{value.title}</p>

              <div className="flex justify-between items-center px-3 pb-3 mt-1">
                <span className="font-bold text-sm text-gray-800">{value.price}</span>
                <button
                  onClick={() => handleAddToCart(value)}
                  className="bg-black text-white text-xs px-3 py-1 rounded-full hover:bg-white hover:text-black border border-black transition"
                >
                  Add
                </button>
              </div>

              <div className="absolute top-2 left-0 bg-black text-white text-[10px] font-medium px-2 py-[2px] rounded-tr-md rounded-br-md">
                New
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Popular;
