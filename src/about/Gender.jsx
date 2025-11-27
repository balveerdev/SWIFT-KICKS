import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Gender = () => {

  const navigate = useNavigate();
  return (
    <div>
       {/* Close / Back Button */}
      <button
        onClick={() => navigate(-1)} // or navigate("/") to go home
        className="self-start mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        ← Back
      </button>
        <div className='mx-auto items-center text-center w-full mt-[50px] text-[30px] font-bold'>-- Best Selling --</div>
        
        <div className='flex max-w-full justify-center items-center gap-4 h-[100px]'>
          <Link to={"/about/"} >  <span className='bg-transparent font-[500]  cursor-pointer shadow-md shadow-[#2221219c] w-[100px] h-[45px] border text-[#000] text-center p-[10px] hover:bg-[#000] hover:text-[#fff] active:bg-[#000] focus:outline-none focus:ring focus:ring-violet-300'>All</span></Link>
           <Link to={"/about/amancoll"} > <span className='bg-transparent font-[500]  cursor-pointer shadow-md shadow-[#2221219c] w-[100px] h-[45px] border text-[#000] text-center p-[10px] hover:bg-[#000] hover:text-[#fff] active:bg-[#000] focus:outline-none focus:ring focus:ring-violet-300'>Man</span> </Link>
            <Link to={"/about/awomancoll"} > <span className='bg-transparent font-[500]  cursor-pointer shadow-md shadow-[#2221219c] w-[100px] h-[45px] border text-[#000] text-center p-[10px] hover:bg-[#000] hover:text-[#fff] active:bg-[#000] focus:outline-none focus:ring focus:ring-violet-300'>Woman</span></Link>
            <Link to={"/about/achildcoll"} > <span className='bg-transparent font-[500]  cursor-pointer shadow-md shadow-[#2221219c] w-[100px] h-[45px] border text-[#000] text-center p-[10px] hover:bg-[#000] hover:text-[#fff] active:bg-[#000] focus:outline-none focus:ring focus:ring-violet-300'>Child</span></Link>
        </div>
    </div>
  )
}

export default Gender;