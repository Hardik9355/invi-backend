import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../axios';

export default function Login(props) {
  const navigate = useNavigate();

  const [clientLogin,setClientLogin] = useState({
    name: "",
    password: ""

});

const [records,setRecords] = useState([]);

const handleInput = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    console.log(name , value);

    setClientLogin({...clientLogin, [name]:value})
}

const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/dev/login',clientLogin).then(res => console.log(res.data));

    const newRecord = {...clientLogin, id: new Date().getTime().toString()}
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setClientLogin({name: "", password: ""})
}



  return (
    <div className='h-screen w-screen'>
        {/* <div className='hidden sm:block'> */}
            {/* <img className='w-full h-full object-cover' src={loginImg} alt="" /> */}
        {/* </div> */}
        {/*  */}
        <div className='bg-gray-800 flex flex-col justify-center h-screen w-screen'>
            <form className='max-w-[400px]    w-9/12   mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
              <h2 className='text-4xl text-white font-bold text-center'>Sign in</h2>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>Email Address</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" autoComplete='off' value={clientLogin.name} onChange={handleInput} name="name" required/>
              </div>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" autoComplete='off' value={clientLogin.password} onChange={handleInput} name="password" required/>
              </div>
              <div className='flex justify-between text-gray-400 py-2'>
                <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                {/* <p>Forgot Password</p> */}
              </div>
              
              <button type='submit' onClick={() => navigate("/login/home")} className='w-full my-5 py-2 bg-blue-500 hover:bg-blue-900  text-white font-semibold rounded-lg' >Sign In</button>

            </form>
        </div>
    </div>
  )
}
// /login/user/detail