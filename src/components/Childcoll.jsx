import React, { useRef, useState, useEffect } from 'react';
import { imgContainercl } from "../components/imagesfile";
import { toast } from "react-toastify";

const Childcoll = () => {
  const showref = useRef();
  const [showCount, setShowCount] = useState(12);
  const [cart, setCart] = useState({});

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('myCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    if (cart[product.id]) {
      toast.info("Already in cart!");
      return;
    }

    setCart((prev) => ({
      ...prev,
      [product.id]: 1,
    }));
    toast.success("Product added to cart!");
  };

  const filteredItems = imgContainercl
    .filter(item => item.discount !== "%")
    .slice(0, showCount);

  const handleShowMore = () => {
    setShowCount(prev => prev + 12);
  };

  return (
    <div ref={showref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 ml-14 xs:ml-0 md:ml-10 2md:ml-5 lg:ml-0 xs:grid-cols-2 2xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 2md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-4 mt-6 mx-auto">
        {filteredItems.map((value, index) => (
          <div key={index} className="w-full max-w-[180px] bg-[#bbb8bb48] rounded-xl border border-gray-300 shadow-sm hover:shadow-lg transition-all relative">
             <a href={`/product/${value.id}`} className='inline-block w-[180px] h-[160px] hover:scale-105 transition-transform '>
            <img
              src={value.src}
              id={value.id}
              alt=""
              className="w-full h-full object-cover"
            />
            </a>
            <div className="p-2">
              <p className="font-[600] text-[13px] leading-tight mb-1">{value.title}</p>
              <div className="flex justify-between items-center">
                <span className="font-[600] text-[14px]">{value.price}</span>
                <button
                  className="bg-black text-white font-bold text-[11px] px-3 py-1 rounded-full shadow-md hover:bg-white hover:text-black active:bg-[#3558b8]"
                  onClick={() => handleAddToCart(value)}
                >
                  Add
                </button>
              </div>
            </div>
            <div className='bg-black w-[30px] h-[16px] text-[10px] text-white font-[500] text-center absolute top-[10px] left-[0px] rounded-tr-md rounded-br-md'>
              {value.discount}
            </div>
          </div>
        ))}
      </div>

      {/* Show More */}
      {showCount < imgContainercl.filter(i => i.discount !== "%").length && (
        <div
          className="bg-[#bbb8bb48] text-black w-[120px] h-[40px] rounded-lg text-center mx-auto flex justify-center items-center mt-6 font-medium cursor-pointer hover:bg-black hover:text-white shadow-md"
          onClick={handleShowMore}
        >
          Show More
        </div>
      )}
    </div>
  );
};

export default Childcoll;
