import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function RegisterOrganisation(props) {
    const navigate = useNavigate();

    const [registerOrganisation,setRegisterOrganisation] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""

    });
    

    const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name; 
        const value = e.target.value;
        console.log(name , value);

        setRegisterOrganisation({...registerOrganisation, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...registerOrganisation, id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setRegisterOrganisation({name: "",email: "",password: "",cpassword: ""})
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
    <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
        <form action="" onSubmit={handleSubmit}>
            <h2 className="text-blue-700 text-3xl font-semibold my-4">Register Organisation</h2>
            {/* <!-- Organisation name --> */}
            <label htmlFor="name" className="text-sm">Organisation Name</label><br />
            <input type="text" autoComplete='off' value={registerOrganisation.name} onChange={handleInput} name="name" id="name"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />

            {/* <!-- email --> */}
            <label htmlFor="email" className="text-sm">Email</label><br />
            <input type="email" autoComplete='off' value={registerOrganisation.email} onChange={handleInput} name="email" id="email"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
            {/* <!-- password --> */}
            <label htmlFor="password" className="text-sm">Password</label><br />
            <input type="password" autoComplete='off' value={registerOrganisation.password} onChange={handleInput} name="password" id="password"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
            {/* <!-- confirm password --> */}
            <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label><br />
            <input type="password" autoComplete='off' value={registerOrganisation.cpassword} onChange={handleInput} name="cpassword" id="confirmPassword"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
            {/* <!-- radio buttons for gender --> */}
            <div id="gender" className="text-sm mb-4 mt-4">
                <p className="mt-2">Mode of service</p>
                <input type="radio" name="service" value={registerOrganisation.value} id="online" className="text-sm mx-1"  /><label htmlFor="online">Online</label>
                <input type="radio" name="service" value={registerOrganisation.value} id="offline" className="text-sm mx-1" /><label htmlFor="offline">Offline</label>
                <input type="radio" name="service" value={registerOrganisation.value} id="both" className="text-sm mx-1" /><label htmlFor="both">Both</label>
            </div>
            {/* <!-- Sign up / submit button --> */}
            <button type="submit" onClick={() => navigate("/login")}   id="signUp"
                className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm" >Submit</button><br />
            <p className="text-xs my-2">Already have a account? <a href="/login" className="text-blue-600">Login</a></p>
        </form>
    </div>
</div>
  )
}
