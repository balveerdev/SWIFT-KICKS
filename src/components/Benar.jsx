import React, { useRef } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const images = [
  { src: "/images/Untitled design(115) 1.png", left: "0px", bottom: "-35px", bgColor: "#f44c4c90", smallimg: [
    "/images/Untitled design(119) 1.png",
    "/images/Untitled design(119) 1 (2).png",
    "/images/Untitled design(119) 1 (3).png"
  ] },
  { src: "/images/man2-removebg-preview.png", left: "-52px", top: "-10px", bgColor: "#ffc10790", smallimg: [
    "/images/Untitled design(119) 1 (4).png",
    "/images/Untitled design(119) 1 (5).png",
    "/images/Untitled design(119) 1 (3).png"
  ] },
  { src: "/images/man3-removebg-preview.png", left: "-30px", top: "-10px", bgColor: "#00bcd490", smallimg: [
    "/images/Untitled design(119) 1.png",
    "/images/Untitled design(119) 1 (2).png",
    "/images/Untitled design(119) 1 (3).png"
  ] },
  { src: "/images/man4-removebg-preview.png", left: "0px", bottom: "-46px", bgColor: "#ff980090", smallimg: [
    "/images/Untitled design(119) 1 (4).png",
    "/images/Untitled design(119) 1 (5).png",
    "/images/Untitled design(119) 1 (3).png"
  ] },
  { src: "/images/man5-removebg-preview.png", left: "40px", top: "-10px", bgColor: "#9c27b090", smallimg: [
    "/images/Untitled design(119) 1.png",
    "/images/Untitled design(119) 1 (2).png",
    "/images/Untitled design(119) 1 (3).png"
  ] },
  { src: "/images/man6-removebg-preview.png", left: "90px", top: "-10px", bgColor: "#4caf5090", smallimg: [
    "/images/Untitled design(119) 1 (4).png",
    "/images/Untitled design(119) 1 (5).png",
    "/images/Untitled design(119) 1 (3).png"
  ] },
  { src: "/images/man7-removebg-preview.png", left: "-28px", bottom: "0px", bgColor: "#2196f390", smallimg: [
    "/images/Untitled design(119) 1.png",
    "/images/Untitled design(119) 1 (2).png",
    "/images/Untitled design(119) 1 (3).png"
  ] },
];

const Benar = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false
  };

  return (
    <div className="w-full px-4 sm:px-6 xl:px-0 max-w-screen-xl mx-auto relative">
      
      {/* Arrows */}
      <div
        className="hidden sm:block absolute top-1/2 left-[40px] text-2xl cursor-pointer z-10 transform -translate-y-1/2"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <BsChevronDoubleLeft />
      </div>
      <div
        className="hidden sm:block absolute top-1/2 right-[40px] text-2xl cursor-pointer z-10 transform -translate-y-1/2"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <BsChevronDoubleRight />
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <div
              className="lg:w-full lg:max-w-[1000px] sm:w-[60%] block sm:h-[50%] text-left mx-auto rounded-[20px] overflow-hidden relative lg:flex lg:flex-row justify-between items-center gap-8 p-6 "
              style={{ backgroundColor: img.bgColor }}
            >
              {/* Background Title */}
              <span className="md:text-[80px] text-[70px] top-24 lg:text-[160px] font-bold text-[#ffffff20] absolute lg:!bottom-[-0px] left-3 font-serif z-0 pointer-events-none">
                SWIFT
              </span>

              {/* Main Image (hide on small screens) */}
              <div className=" invisible w-0 h-0 lg:visible lg:flex items-center justify-center ">
                <a href="#" className=' lg:!absolute h-[300px] xl:h-[350px]' style={{ bottom: img.bottom, top: img.top, left: img.left }}>
                  <img src={img.src} alt="" className="h-full w-full object-cover " />
                </a>
              </div>

              {/* Text & Small Images */}
              <div className="text-white z-10 w-full max-w-[400px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Are you ready <br /> to lead the way
                </h2>
                <p className="text-sm sm:text-base font-medium mt-2">
                  Lorem ipsum dolor sit amet consectetur, <br className="hidden sm:block" />
                  adipisicing elit. ipsum dolor.
                </p>

                <Link to="/about">
                  <button className="bg-white text-black mt-4 px-5 py-2 rounded font-bold hover:shadow-lg hover:-translate-y-1 active:text-black active:bg-white transition-all duration-700 ease-in-out">
                    Explore
                  </button>
                </Link>

                <div className="flex mt-4 gap-2 flex-wrap">
                  {img.smallimg.map((src, i) => (
                    <a
                      key={i}
                      href="#"
                      className="bg-white w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-lg border overflow-hidden"
                    >
                      <img src={src} alt={`small-${i}`} className="w-full h-full object-cover" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Benar;
