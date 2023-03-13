import React from 'react'
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-gray-500'>
                <div className='font-bold text-black text-8xl'>Reg<span className='text-red-600	'>is</span>ter</div>

        <div className='flex h-4/5 w-4-5 justify-center items-center'>
        <button onClick={() => navigate("/signup/person")} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-white-500 hover:bg-transparent hover:text-white-500 transition-all duration-300 m-1'>Create Account by person</button>
        <button onClick={() => navigate("/signup/organisation")} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-white-500 hover:bg-transparent hover:text-white-500 transition-all duration-300 m-1'>Create Account by Organisation</button>
        </div>
    </div>
  )
}
