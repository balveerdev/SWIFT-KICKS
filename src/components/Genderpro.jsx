import React from 'react'
import {Link} from 'react-router-dom'
const Genderpro = () => {
  return (
    <div>
        <div className='mx-auto items-center text-center w-full mt-[50px] text-[30px] font-bold'>-- Best Selling --</div>
        <div className='flex max-w-full justify-center items-center gap-4 h-[100px]'>
          <Link to={"/"} >  <span className='bg-transparent font-[500] cursor-pointer shadow-md shadow-[#2221219c] w-[100px] h-[45px] border text-[#000] text-center p-[10px] hover:bg-black hover:text-white hover:-translate-y-1 active:bg-[#9e6af1] active:text-white transition-all duration-800 ease-in-outinline-flex items-center justify-center'>All</span></Link>
           <Link to={"/mancoll"} > <span className='bg-transparent font-[500]  cursor-pointer shadow-md shadow-[#2221219c] w-[100px] h-[45px] border text-[#000] text-center p-[10px] hover:bg-[#000] hover:text-[#fff] active:bg-[#9e6af1] focus:outline-none hover:-translate-y-1 active:text-white transition-all duration-800 ease-in-out'>Man</span> </Link>
            <Link to={"/womancoll"} > <span className='bg-transparent font-[500]  cursor-pointer shadow-md shadow-[#2221219c] w-[100px] h-[45px] border text-[#000] text-center p-[10px] hover:bg-[#000] hover:text-[#fff] active:bg-[#9e6af1] focus:outline-none hover:-translate-y-1 active:text-white transition-all duration-800 ease-in-out'>Woman</span></Link>
            <Link to={"/childcoll"} > <span className='bg-transparent font-[500]  cursor-pointer shadow-md shadow-[#2221219c] w-[100px] h-[45px] border text-[#000] text-center p-[10px] hover:bg-[#000] hover:text-[#fff] active:bg-[#9e6af1]  focus:outline-none hover:-translate-y-1 active:text-white transition-all duration-800 ease-in-out'>Child</span></Link>
        </div>
    </div>
  )
}

export default Genderpro;