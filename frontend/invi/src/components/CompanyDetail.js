import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function CompanyDetail(props) {
    const navigate = useNavigate();

    const [companyRegister,setCompanyRegister] = useState({
        CompanyName: "",
        taxregister:"",
        TaxRegisterationNumber:"",
        fname: "",
        lname: "",
        addres1: "",
        addres2: "",
        PostalCode: "",
        City: "",
        Country: "",
        PNumber: "",
        Email: "",
        Website: ""

    });

    const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name; 
        const value = e.target.value;
        console.log(name , value);

        setCompanyRegister({...companyRegister, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...companyRegister, id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setCompanyRegister({CompanyName: "",taxregister:"",taxnumber:"",fname: "",lname: "",addres1: "",addres2: "",PostalCode: "",City: "",Country: "",PNumber: "",Email: "",Website: ""})

    }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
    <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-4/5">
        <form action="" onSubmit={handleSubmit}>
            <h2 className="text-blue-700 text-3xl font-semibold my-4">Company detail....</h2>
            {/* block first */}
            <div id="companyName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="companyName" className="w-1/2 mr-2">
                        <label htmlFor="cname" className="text-sm">Company/Sender name*</label><br />
                        <input type="text" autoComplete='off' value={companyRegister.CompanyName} onChange={handleInput} name="CompanyName" id="cname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" />
                    </div>
                    {/* <!-- last name --> */}
                    <div id="cNumber" className="w-1/2 ml-2">
                        <label  className="text-sm lastnameLabel" value={companyRegister.taxregister} onChange={handleInput} name="taxregister" contenteditable="true">Tax Registration no.</label><br />
                        <i class="fa-solid fa-pencil"></i>
                        <input type="text" autoComplete='off' value={companyRegister.taxnumber} onChange={handleInput} name="taxnumber" id="cNumber"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>
            
                {/* block second */}
              <div id="fullName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="firstName" className="w-1/2 mr-2">
                        <label htmlFor="fname" className="text-sm">First Name</label><br />
                        <input type="text" autoComplete='off' value={companyRegister.fname} onChange={handleInput} name="fname" id="fname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" />
                    </div>
                    {/* <!-- last name --> */}
                    <div id="lastName" className="w-1/2 ml-2">
                        <label htmlFor="lname" className="text-sm">Last Name</label><br />
                        <input type="text" autoComplete='off' value={companyRegister.lname} onChange={handleInput} name="lname" id="lname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>

              {/* block third */}
              <div id="address" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="add1" className="w-1/2 mr-2">
                        <label htmlFor="address1" className="text-sm">Address line 1</label><br />
                        <input type="text" autoComplete='off' value={companyRegister.addres1} onChange={handleInput} name="addres1" id="address1"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" />
                    </div>
                    {/* <!-- last name --> */}
                    <div id="add2" className="w-1/2 ml-2 ">
                        <label htmlFor="address2" className="text-sm">Address line 2</label><br />
                        <input type="text" autoComplete='off' value={companyRegister.addres2} onChange={handleInput} name="addres2" id="address2"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>

              {/* block four */}
              <div id="PostalCode" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="pCode" className="w-1/2 mr-2">
                        <label htmlFor="postal" className="text-sm">PostalCode</label><br />
                        <input type="number" autoComplete='off' value={companyRegister.PostalCode} onChange={handleInput} name="PostalCode" id="postal"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" />
                    </div>
                    {/* <!-- last name --> */}
                    <div id="City" className="w-1/2 ml-2">
                        <label htmlFor="Cityname" className="text-sm">City</label><br />
                        <input type="text" autoComplete='off' value={companyRegister.City} onChange={handleInput} name="City" id="Cityname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>

              {/* block five */}
              <div id="detail" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="place" className="w-1/2 mr-2">
                        <label htmlFor="Country" className="text-sm">Country</label><br />
                        <input type="text" autoComplete='off' value={companyRegister.Country} onChange={handleInput} name="Country" id="Country"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" />
                    </div>
                    {/* <!-- last name --> */}
                    <div id="numbr" className="w-1/2 ml-2">
                        <label htmlFor="PNumber" className="text-sm">Phone number</label><br />
                        <input type="number" autoComplete='off' value={companyRegister.PNumber} onChange={handleInput} name="PNumber" id="PNumber"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>

              {/* block six */}
              <div id="link" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="mail" className="w-1/2 mr-2">
                        <label htmlFor="mailEmail" className="text-sm">Email</label><br />
                        <input type="Email" autoComplete='off' value={companyRegister.Email} onChange={handleInput} name="Email" id="mailEmail"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" />
                    </div>
                    {/* <!-- last name --> */}
                    <div id="Website" className="w-1/2 ml-2 ">
                        <label htmlFor="webWebsite" className="text-sm">Website</label><br />
                        <input type="text" autoComplete='off' value={companyRegister.Website} onChange={handleInput} name="Website" id="website"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" />
                    </div>
              </div>

           
            {/* <!-- Sign up / submit button --> */}
            
            <button type="submit" id="submit" className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm mt-5" >Submit</button>
        </form>
    </div>
</div>
  )
}
