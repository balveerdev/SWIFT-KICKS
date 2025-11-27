import React, { useRef, useState, useEffect } from 'react'
import { imgContainercl } from "../components/imagesfile";
import { toast } from "react-toastify";

const Allcollection = () => {
  const showref = useRef();
  const [showCount, setShowCount] = useState(12);
  const [cart, setCart] = useState({});

  // Load cart from localStorage on first load
  useEffect(() => {
    const savedCart = localStorage.getItem('myCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage when it updates
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
    <div ref={showref} className="max-w-screen-xl mx-auto px-4 py-10">
         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">All Collections</h2>
   
         <div className="grid grid-cols-1 ml-14 xs:ml-0 md:ml-10 2md:ml-5 lg:ml-0 xs:grid-cols-2 2xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 2md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-4 mt-6 mx-auto">
           {filteredItems.map((value, index) => (
             <div
               key={index}
               className="w-full max-w-[180px] bg-[#bbb8bb48] rounded-xl border border-gray-300 shadow-sm hover:shadow-lg transition-all relative"
             >
              <a href={`/product/${value.id}`} className='inline-block w-[180px] h-[160px] hover:scale-105 transition-transform '>
               <img
                 src={value.src}
                 id={value.id}
                 alt={value.title}
                  className="w-full h-full object-cover "
               />
               </a>
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
                 {value.discount}
               </div>
             </div>
           ))}
         </div>
   
         {/* Show More Button */}
         {showCount < imgContainercl.filter(i => i.discount !== "%").length && (
           <div
             className="bg-[#f0f0f0] text-black w-[130px] h-[42px] mx-auto mt-8 flex justify-center items-center text-sm font-semibold rounded-lg shadow-sm hover:bg-black hover:text-white cursor-pointer"
             onClick={handleShowMore}
           >
             Show More
           </div>
         )}
       </div>
  );
};

export default Allcollection;
