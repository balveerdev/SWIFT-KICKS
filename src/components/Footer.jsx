import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#000] w-full mt-24 px-4'>
      <div className='flex flex-col md:flex-row justify-center lg:justify-between items-start gap-10 md:gap-[70px] text-white py-12 md:px-[60px]'>
        
        {/* Section 1: Info + Social */}
        <div className='w-full md:w-[250px] text-center md:text-left'>
          <span className='text-[24px] md:text-[20px] font-bold'>BALVEER SOLANKI</span>
          <p className='mt-4 text-sm text-[#c4c1c1]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque repellendus aliquam! Molestias reprehenderit
          </p>
          <div className='flex justify-center md:justify-start items-center pt-3 gap-4 text-[20px]'>
            <a className='hover:text-[#22228a] hover:-translate-y-1 transition-all duration-800 ease-in-out' href="https://github.com/balveerdev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className='hover:text-[#22228a] hover:-translate-y-1 transition-all duration-800 ease-in-out' href="https://linkedin.com/in/balveer_solanki" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className='hover:text-[#22228a] hover:-translate-y-1 transition-all duration-800 ease-in-out' href="https://instagram.com/balveer_solanki_8875" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
          </div>
        </div>

        {/* Section 2: Subscribe */}
        <div className='w-full md:w-[250px] text-center md:text-left'>
          <p className='text-base font-medium text-[#c4c1c1] mb-2'>Subscribe for Newsletter</p>
          <div className='flex justify-center md:justify-start items-center'>
            <input
              className='w-[180px] h-[35px] px-2 text-black text-sm rounded-tl-md rounded-bl-md outline-none'
              type="email"
              placeholder="Enter email.."
            />
            <button className='bg-white text-[#000] h-[35px] text-sm font-semibold px-3 rounded-tr-md rounded-br-md'>SUBSCRIBE</button>
          </div>
        </div>

        {/* Section 3: Links */}
        <div className='w-full md:w-[250px] flex flex-col text-center md:text-left'>
          <span className='font-semibold mb-2'>Quick Links</span>
          <a href="#"><span className='text-sm text-[#fff] hover:text-[#c4c1c1] mb-1'>Home</span></a>
          <a href="#"><span className='text-sm text-[#fff] hover:text-[#c4c1c1] mb-1'>Shop</span></a>
          <a href="#"><span className='text-sm text-[#fff] hover:text-[#c4c1c1] mb-1'>Category</span></a>
          <a href="#"><span className='text-sm text-[#fff] hover:text-[#c4c1c1] mb-1'>Contact</span></a>
          <a href="#"><span className='text-sm text-[#fff] hover:text-[#c4c1c1] mb-1'>Privacy</span></a>
        </div>

      </div>

      {/* Bottom Line */}
      <div className='flex flex-col items-center'>
        <div className='w-[50px] h-[1px] bg-[#979292] mb-2'></div>
        <span className='text-xs text-[#c4c1c1] pb-4'>www.Swift Kicks.com © All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
