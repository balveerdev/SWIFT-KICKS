import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Header from "../components/Header";
import { imgContainer, imgContainercl } from '../components/imagesfile';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addcart = () => {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('myCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(cart));
  }, [cart]);

  const increase = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: (prevCart[product.id] || 0) + 1,
    }));
  };

  const decrease = (product) => {
    setCart((prevCart) => {
      const newQty = (prevCart[product.id] || 0) - 1;
      if (newQty <= 0) {
        const { [product.id]: _, ...rest } = prevCart;
        return rest;
      }
      return { ...prevCart, [product.id]: newQty };
    });
  };

  const removeItem = (productId) => {
    setCart((prevCart) => {
      const { [productId]: _, ...rest } = prevCart;
      return rest;
    });
  };

  const parsePrice = (priceStr) =>
    parseFloat(priceStr.replace('₹', '').replace(',', '').trim()) || 0;

  const allProducts = [...imgContainer, ...imgContainercl];
  const cartItems = allProducts.filter((item) => cart[item.id]);

  const handleBuyNow = (product) => {
  toast.success("Buying now...");
  removeItem(product.id);
};
  function  handleBuyNowAll() {
  toast.success("Order placed successfully!");
  setCart({});
  setTimeout(() => navigate("/ordersuccess"), 800);

};

const parseDiscount = (discountStr) => {
  if (!discountStr) return 0;
  if (typeof discountStr === "number") return discountStr;
  return parseFloat(discountStr.replace("%", "").trim()) || 0;
};

const subtotal = cartItems.reduce(
  (acc, item) => acc + parsePrice(item.price) * (cart[item.id] || 0),
  0
);

const totalDiscount = cartItems.reduce(
  (acc, item) => acc + ((parsePrice(item.price) * (cart[item.id] || 0)) * parseDiscount(item.discount)) / 100,
  0
);

const finalAmount = subtotal - totalDiscount;




  return (
    <>
      <Header />
      <div className="w-full px-4 mx-auto">
         {/* Close / Back Button */}
              <button
                onClick={() => navigate(-1)} // or navigate("/") to go home
                className="self-start mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                ← Back
              </button>
        <h2 className="text-2xl font-bold text-center mb-4">Your Cart Products</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">
            No items in cart.😴 Please add product...
            <br />
            <a href="/" className="text-blue-500 underline">Go Shopping</a>
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full max-w-[1200px] mx-auto border-collapse">
              <thead className="bg-[#fff] border border-gray-200 text-left shadow-md hidden md:table-header-group">
                <tr>
                  <th className="p-3 pl-8">Product</th>
                  <th className="p-3 text-center">Quantity</th>
                  <th className="p-3 text-right">MRP</th>
                  <th className="p-3 text-right">Discount %</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.id} className="border-b block md:table-row mb-4 md:mb-0">
                  {/* Product Info */}
                  <td className="flex md:table-cell items-center gap-4 p-3">
                    <img src={product.src} alt={product.title} className="w-[80px] h-[80px]" />
                    <div>
                      <p className="font-semibold text-[15px]">{product.title}</p>
                      <span className="text-gray-700">{product.price}</span>
                      <Stack spacing={1}>
                        <Rating name="size-small" defaultValue={4} size="small" />
                      </Stack>
                    </div>
                  </td>
                
                  {/* ✅ Quantity + Subtotal + Remove Button in 1 row on mobile */}
                  <td className="block md:hidden p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {/* Quantity Control */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="text-[24px] px-2 font-bold"
                          onClick={() => decrease(product)}
                        >
                          -
                        </button>
                        <h1 className="text-[16px] font-[500] border text-center w-10">
                          {cart[product.id]}
                        </h1>
                        <button
                          type="button"
                          className="text-[22px] px-2 font-bold"
                          onClick={() => increase(product)}
                        >
                          +
                        </button>
                      </div>
                
                      {/* MRP */}
                      <div className="font-semibold">
                        ₹{(parsePrice(product.price) * cart[product.id]).toFixed(2)}
                      </div>

                      {/* <div className="font-semibold text-green-600">
                         {(
                          (parsePrice(product.price) * (cart[product.id] || 0) * parseDiscount(product.discount)) / 100
                        ).toFixed(2)}
                      </div> */}

                
                      {/* Remove Button */}
                      <button
                        onClick={() => {
                            setSelectedProductId(product.id);
                            setShowPopup(true);
                          }}
                        className="text-red-600 font-bold hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                
                  {/* ✅ Desktop View Cells (hidden on mobile) */}
                  <td className="hidden md:table-cell text-center p-3">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        type="button"
                        className="text-[24px] px-2 font-bold"
                        onClick={() => decrease(product)}
                      >
                        -
                      </button>
                      <h1 className="text-[16px] font-[500] border text-center w-10">
                        {cart[product.id]}
                      </h1>
                      <button
                        type="button"
                        className="text-[22px] px-2 font-bold"
                        onClick={() => increase(product)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                
                  <td className="hidden md:table-cell text-right p-3 font-semibold">
                    ₹{(parsePrice(product.price) * cart[product.id]).toFixed(2)}
                  </td>
                  <td className="hidden md:table-cell text-right p-3 font-semibold">
                    
                    {(
                       (parsePrice(product.price) * (cart[product.id] || 0) * parseDiscount(product.discount)) / 100
                     ).toFixed(2)}
                   </td>

                          
                  <td className="hidden md:table-cell text-right p-3">
                    <button
                      onClick={() => {
                          setSelectedProductId(product.id);
                          setShowPopup(true);
                        }}
                      className="text-red-600 font-bold hover:underline"
                    >
                      Remove
                    </button>
                     <button
                       onClick={() => handleBuyNow(product)}
                       className="bg-black hover:bg-gray-700 text-white text-xs ml-6 px-3 py-1 w-[80px] rounded-md hover:text-black border border-black transition"
                     >
                       Buy
                     </button>

                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {cartItems.length > 0 && (
       <div className="w-full mx-auto max-w-[1200px] mt-5 py-4 ">
  <div className="w-full text-lg  bg-white shadow-sm border-l border-r border-t border-b border-gray-300">

    {/* Subtotal */}
    <div className="flex border-b border-gray-300">
      <span className="w-[100%] px-5 py-2 font-medium text-[18px]">
        Subtotal
      </span>
      <span className="w-[100%] border-l border-gray-300 px-5 py-2 font-medium text-[18px] text-right">
        ₹{subtotal.toFixed(2)}
      </span>
    </div>

    {/* Discount */}
    <div className="flex border-b border-gray-300">
      <span className="w-[100%] px-5 py-2 font-medium text-[18px] text-green-600">
        Discount %
      </span>
      <span className="w-[100%] border-l border-gray-300 px-5 py-2 font-medium text-[18px] text-green-600 text-right">
        ₹{totalDiscount ? totalDiscount.toFixed(2) : "0.00"}
      </span>
    </div>

    {/* Final Payable */}
    <div className="flex border-b border-gray-300">
      <span className="w-[100%] px-5 py-2 font-medium text-[18px]">
        Final Payable
      </span>
      <span className="w-[100%] border-l border-gray-300 px-5 py-2 font-medium text-[18px] text-right">
        ₹{finalAmount ? finalAmount.toFixed(2) : "0.00"}
      </span>
    </div>

    {/* Button */}
    <div className="w-full text-end p-2">
      <button
        onClick={handleBuyNowAll}
        className="w-[100px]  md:w-[150px] bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 transition"
      >
        Buy Now
      </button>
    </div>
  </div>
</div>


        )}
      </div>
      {showPopup && (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded shadow-lg w-[90%] sm:w-[350px] text-center">
      <h3 className="font-bold text-[18px] mb-3">Remove Item</h3>
      <p className="text-gray-600 mb-5">Are you sure you want to remove this item from cart?</p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => {
            removeItem(selectedProductId);
            toast.error("Product removed from cart");
            setShowPopup(false);
          }}
          className="bg-red-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-red-700"
        >
          Yes, Remove
        </button>

        <button
          onClick={() => setShowPopup(false)}
          className="bg-gray-400 text-white px-4 py-1 rounded cursor-pointer hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      <ToastContainer />

    </>
  );
};

export default Addcart;
