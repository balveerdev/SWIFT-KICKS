import React from 'react'
import MainCss from "./main.module.css";
import {Link} from "react-router-dom";
const Mainsec = () => {
  return (
    <div>
        
        <div >
            <div className={`${MainCss.mainseccl} sm:h-[650px] 2xs:h-[450px] xs:h-[410px] h-[300px] relative overflow-hidden`}>              
                <div className={`${MainCss.leftpart} hidden lg:block absolute left-0 top-0`}>
                    <div className={MainCss.leftmodle}>
                      <div className='bg-[#bbb8bb48] w-[420px] h-[10px] absolute left-[115px] top-[40px] hidden lg:block'></div>
                      <div className='bg-[#bbb8bb48] w-[420px] h-[10px] absolute left-[0px] top-[80px] hidden lg:block'></div>
  
                    <div className={MainCss.addtitle}>Find Your <br /> Sole Mate <br /> With Us</div>
                    <p className='flex-wrap font-[500] pt-[25px] text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Fugit, eius aspernatur modi amet lab</p>
                  <Link to={"/Popular"} > <button className='bg-black text-white w-[110px] h-[38px] font-bold mt-[40px] shadow-lg shadow-[#2221219c] hover:-translate-y-1 active:text-black active:bg-white transition-all duration-800 ease-in-out' >Shop Now</button></Link> 

                    </div>
                    <a href="#" className=' absolute right-24 bottom-[110px]'><img src="/images/Group 96.png" alt="QR Code" className='w-20 h-20'/></a>
                </div>
               
                <div className='w-[480px] h-[320px] left-[-180px] 2xl:w-[1160px] 2xl:h-[650px] xl:h-[650px] xl:w-[1160px] xl:left-[100px] 2md:left-[-350px] md:left-[-400px] sm:h-[650px] sm:w-[1050px] sm:left-[-400px] 2xs:left-[-310px] 2xs:h-[450px] 2xs:w-[750px] xs:left-[-280px] xs:h-[410px] xs:w-[670px] lg:left-[170px] lg:h-[600px] lg:w-[960px] 2md:h-[650px] 2md:w-[1160px] md:h-[650px] md:w-[1160px] absolute 2xl:left-[300px] xl:pb-3  overflow-hidden object-contain'>
                 <img src="/images/Group 95 (5).png" alt="" />
                 </div>

                 <div className='bg-[#fff] w-[10px] h-[650px]  left-[710px] absolute hidden 2xl:block '></div>
                 <div className='bg-[#fff] w-[10px] h-[650px]  left-[615px] absolute hidden 2xl:block'></div>
            </div>
             
        </div>
    </div>
  )
}

export default Mainsec;