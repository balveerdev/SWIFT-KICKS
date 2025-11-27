import React, { useRef, useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { RiSearchLine } from "react-icons/ri";
import { TbRosetteDiscount } from "react-icons/tb";
import { BsBriefcase } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {imgContainer, imgContainercl} from "../components/imagesfile";

export default function Header(){

  const [menuOpen, setMenuOpen] = useState(false);
  const goToAdd = useRef();
  const goToAddB = useRef();
  const goToAddB2 = useRef();

     function goToLoc (){
       goToAdd.current.style.display = "inline";
       goToAddB.current.style.display = "none";
       goToAddB2.current.style.display = "inline";
     }
     function goToLocB (){
       goToAdd.current.style.display = "none";
       goToAddB.current.style.display = "inline";
       goToAddB2.current.style.display = "none";
     }

     const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);
    const [searchInput, setSearchInput] = useState("");
const [searchTriggered, setSearchTriggered] = useState(false);

 
     const allProducts = [...imgContainer, ...imgContainercl];
const filteredProducts = allProducts.filter((product) =>
  product.title.toLowerCase().includes(searchInput.toLowerCase())
);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    return(
        <>     
          {toggle && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500"
    onClick={hideSideMenu}
    style={{
      opacity: toggle ? 1 : 0,
      visibility: toggle ? "visible" : "hidden"
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white h-full absolute left-0 transition-all duration-500 ease-in-out overflow-y-auto
                 w-[80%] sm:w-[80%] md:w-[400px] p-4"
      style={{
        left: toggle ? "0%" : "-100%"
      }}
    >
      {/* ✅ Close Button (Responsive) */}
      <div
        className="absolute top-[85px] right-4 bg-gray-400 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
        onClick={hideSideMenu}
      >
        <RxCross2 className="text-[#000] text-sm" />
      </div>

      {/* Search Input */}
      <div className="mt-28 flex flex-col sm:flex-row gap-3">
      <input
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search product..."
          className="text-black border border-black p-2 rounded-lg w-full outline-none"
        />
      <button
          onClick={() => setSearchTriggered(true)}
          className="bg-black text-white border border-black p-2 rounded-lg w-full sm:w-auto"
        >
          Search
        </button>
        </div>

      {/* Filtered Results - only if user typed something */}
{searchTriggered && (
  <div className="p-4">
    {filteredProducts.length === 0 ? (
      <p className="text-gray-500 mt-4">No matching products found.</p>
    ) : (
      <div className="space-y-4 mt-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex gap-3 items-center justify-between border-b pb-2">
            <div className="flex gap-2 items-center">
              <img src={product.src} alt={product.title} className="w-16 h-16 object-cover" />
              <div>
                <p className="font-bold text-[10px] sm:font-semibold sm:text-sm">{product.title}</p>
                <p className="text-[12px] sm:text-sm text-gray-600">{product.price}</p>
              </div>
            </div>
            <button
              onClick={() => {
                hideSideMenu();         // Close the sidebar
                navigate(`/product/${product.id}`); // Navigate to detail
              }}
              className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
            >
              View
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
)}


    </div>
  </div>
)}

     {/* 🔷 Right Side Drawer Menu (Mobile Only) */}
      {menuOpen && (
        <div
          className="fixed max-h-min overflow-y-hidden top-0 right-0 h-[250px] w-[250px] bg-white shadow-lg z-40 p-4 flex flex-col gap-4 transition-all duration-300 lg:hidden"
        >
          <div className="flex absolute right-4 justify-end">
            <button className="text-2xl text-gray-700" onClick={() => setMenuOpen(false)}>
              <RxCross2 />
            </button>
          </div>
          <div className="flex flex-col gap-4 text-black text-sm font-semibold">
            <div
              onClick={() => {
                showSideMenu();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-500"
            >
              <RiSearchLine />
              Search
            </div>
            <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
              <IoHomeOutline />
              Home
            </div>
            <div onClick={() => navigate("/about")} className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
              <BsBriefcase />
              Collection
            </div>
            <Link to="/Popular">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
                <TbRosetteDiscount />
                Offers <sup className="text-[#5d5b5b]">New</sup>
              </div>
            </Link>
            <Link to="/cart">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
                <GrCart />
                Cart
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* 🟨 Header Main */}
      <header className="bg-white sticky !top-0 w-full z-20 shadow-xl text-[#686b78]">
        <div className="flex  items-center justify-between px-4 md:px-6 lg:px-8 h-[60px] lg:h-[80px]">
          {/* Logo & Location */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a href="/" className="w-[60px] lg:w-[100px] ">
              <img
                src="/images/web-logo.png"
                alt="logo"
                className="object-cover w-full h-auto"
              />
            </a>
            <div className=" flex justify-center items-center flex-nowrap flex-row sm:block">
              <span className="font-bold border-b-2 border-[#02060cb3] text-[#02060cb3]"> SWIFT KICKS </span>
              <span className="none " ref={goToAdd}>
              <span className=" ml-2 text-[#02060cb3]">Jaipur,</span>
              <span className="hidden sm:inline  text-[#02060cb3]"> Rajasthan, India</span>
              </span>
              <RxCaretUp fontSize={20} className="hidden text-black cursor-pointer  hover:shadow-[#413f3f] ml-1" ref={goToAddB} onClick={goToLoc}/>
              <RxCaretDown fontSize={20} className="inline  text-black cursor-pointer hover:shadow-[#413f3f] ml-1" ref={goToAddB2} onClick={goToLocB}/>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 text-black font-semibold text-sm lg:text-base">
            <li onClick={showSideMenu} className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
              <RiSearchLine />
              <span>Search</span>
            </li>
            <li onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
              <IoHomeOutline />
              Home
            </li>
            <li onClick={() => navigate("/about")} className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
              <BsBriefcase />
              Collection
            </li>
            <Link to="/Popular">
              <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
                <TbRosetteDiscount />
                Offers <sup className="text-[#5d5b5b]">New</sup>
              </li>
            </Link>
            <Link to="/cart">
              <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500">
                <GrCart />
                Cart
              </li>
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button className="text-2xl text-black" onClick={() => setMenuOpen(true)}>
              ☰
            </button>
          </div>
        </div>
      </header>


        </>

    )
}