import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Home(props) {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-gray-500 '>
                {/* <div className='font-bold text-black text-8xl'>InZ<span className='text-red-600	'>int</span></div> */}
                <div className='hidden sm:block w-1/3'>
            <img className='w-full h-full object-cover' src={logo} alt="" />
        </div>

        <div className='flex h-4/5 w-4-5 justify-center items-center '>
        <button onClick={() => navigate("/signup")} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-white-500 hover:bg-transparent hover:text-white-500 transition-all duration-300 m-1'>Register Account</button>
        <button onClick={() => navigate("/login")} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-white-500 hover:bg-transparent hover:text-white-500 transition-all duration-300 m-1'>Already a user</button>
        </div>
    </div>
  )
}
