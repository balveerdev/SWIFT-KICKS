import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { imgContainer, imgContainercl } from "../components/imagesfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ProductDetail() {
  const { id } = useParams(); // gets the id from the URL
  const navigate = useNavigate();

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


  const allProducts = [...imgContainer, ...imgContainercl];
  const product = allProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="p-6 text-red-500">Product not found.</div>;
  }

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Close / Back Button */}
      <button
        onClick={() => navigate(-1)} // or navigate("/") to go home
        className="self-start mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        ← Back
      </button>

      <img src={product.src} alt={product.title} className="w-64 h-64 object-contain" />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-xl mt-2">{product.price}</p>
      <p className="text-green-600 mt-1">Discount: {product.discount}</p>
      <button className="bg-black text-white font-bold text-[12px] w-[50px] h-[23px] rounded-[25px] shadow-lg shadow-[#2221219c]  hover:bg-white hover:text-black active:bg-[#3558b8]"  onClick={() => handleAddToCart(product)}>Add</button>
      <ToastContainer />

    </div>
  );
}
