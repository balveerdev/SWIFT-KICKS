import React, { useRef, useState, useEffect } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { imgContainer } from "../components/imagesfile";
import { MdTrendingFlat } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Category() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [cart, setCart] = useState({});

  
  useEffect(() => {
    const savedCart = localStorage.getItem("myCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
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

  useEffect(() => {
    checkScroll();
  }, [imgContainer]);

  // Drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
    checkScroll();
  };

  const scrollNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + 340,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 340);
  };

  const scrollPrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft - 340,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 340);
  };

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-left lg:gap-12 px-4 sm:px-10 lg:px-16 py-10">
      {/* Left Static Card */}
      <div className="bg-white relative w-full sm:w-[300px] h-auto mb-10 lg:mb-0">
        <div className="flex items-center gap-2">
          <p className="text-black flex"><MdTrendingFlat /><MdTrendingFlat /><MdTrendingFlat /></p>
          <span className="text-black font-semibold text-[14px] sm:text-[16px]">Our Trending Shoe</span>
        </div>
        <div className="text-black font-bold text-[30px] sm:text-[36px] leading-tight mt-2">
          Most Popular <br /> Products
        </div>
        <p className="text-[#737273] text-[12px] mt-3 font-medium leading-[1.4]">
          Lorem ipsum dolor sit consectetur adipisicing elit. <br /> amet consectetur adipisicing elit.
        </p>
        <Link to={"/Popular"}>
          <button className="bg-black text-white w-[100px] h-[40px] mt-5 font-bold shadow-lg shadow-[#2221219c] hover:-translate-y-1 active:text-black active:bg-white transition-all duration-800 ease-in-out">
            Explore
          </button>
        </Link>
      
       {/* QR Code */}
        <a href="#" className=' lg:hidden block absolute xs:right-0 right-0 sm:right-[-20px] xs:bottom-[110px] bottom-[105px] sm:bottom-[95px] '><img src="/images/Group 96.png" alt="QR Code" className='w-20 h-20'/></a>

       </div>

      {/* Scrollable Product Cards */}
      <div className="w-full lg:w-[70%]">
        {/* Header */}
        <div className="flex mb-4 items-center justify-between">
          <div className="text-[18px] sm:text-[20px] font-bold">What's on your mind?</div>
          <div className="flex">
            <div
              className={`w-[30px] h-[30px] rounded-full mx-1 flex justify-center items-center ${
                canScrollLeft ? "bg-[#d1d1d6] cursor-pointer" : "bg-[#e2e2e7b0] text-[#bfbfc6] cursor-not-allowed"
              }`}
              onClick={canScrollLeft ? scrollPrev : undefined}
            >
              <IoArrowBack />
            </div>
            <div
              className={`w-[30px] h-[30px] rounded-full mx-1 flex justify-center items-center ${
                canScrollRight ? "bg-[#d1d1d6] cursor-pointer" : "bg-[#e2e2e7b0] text-[#bfbfc6] cursor-not-allowed"
              }`}
              onClick={canScrollRight ? scrollNext : undefined}
            >
              <IoArrowForward />
            </div>
          </div>
        </div>

        {/* Scroll Cards */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar pb-4"
        >
          {imgContainer.map((value, index) => (
            <div
              key={index}
              className="w-[175px] sm:w-[180px] shrink-0 bg-[#bbb8bb48] rounded-xl relative overflow-hidden border border-zinc-300"
            >
               <a href={`/product/${value.id}`} className='inline-block w-[180px] h-[160px] hover:scale-105 transition-transform '>
              <img
                src={value.src}
                alt={value.title}
                className="w-full h-full object-cover"
              />
              </a>
              <p className="font-semibold px-4 text-[12px] pb-2">{value.title}</p>
              <div className="flex justify-between items-center px-4 pb-3">
                <span className="font-semibold text-[14px]">{value.price}</span>
                <button
                  className="bg-black text-white font-bold text-[10px] sm:text-[12px] w-[50px] h-[23px] rounded-full shadow-lg hover:bg-white hover:text-black active:bg-[#3558b8]"
                  onClick={() => handleAddToCart(value)}
                >
                  Add
                </button>
              </div>
              <div className="bg-black text-white text-[8px] p-[2px] absolute top-2 left-0 rounded-tr-sm rounded-br-sm w-[30px] text-center">
                New
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border border-[rgba(2,6,12,0.05)] my-6" />
      </div>
    </div>
  );
}
