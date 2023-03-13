import React from 'react'
import { useNavigate } from "react-router-dom";

export default function LoginHome(props) {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-centerflex content-center bg-gray-500'>
        <button onClick={() => navigate("/login/user/detail")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2">Add Company detail</button>
        <button onClick={() => navigate("/login/client/detail")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 mt-2 ">Add client detail</button>
        <button onClick={() => navigate("/login")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 mt-2 ">Show Saved company</button>
        <button onClick={() => navigate("/login")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Show Saved client</button>
    </div>
  )
}
