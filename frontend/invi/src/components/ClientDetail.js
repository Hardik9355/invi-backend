import React, { useState } from 'react'

export default function ClientDetail() {

    const [clientRegister,setClientRegister] = useState({
        CompanyName: "",
        Country: "",
        fname: "",
        lname: "",
        email: "",
        PNumber: "",
        addres1: "",
        addres2: "",
        PostalCode: "",
        City: "",
        Website: "",
        InvoiceCurrency: "",
        Description: ""

    });

    const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name; 
        const value = e.target.value;
        console.log(name , value);

        setClientRegister({...clientRegister, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...clientRegister, id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setClientRegister({CompanyName: "",Country: "", fname: "",lname: "",email: "",PNumber: "",addres1: "",addres2: "",PostalCode: "",City: "",Website: "",InvoiceCurrency: "",Description: ""})
    }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
    <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-4/5">
        <form action="" onSubmit={handleSubmit}>
            <h2 className="text-blue-700 text-3xl font-semibold my-4">Client detail....</h2>
            {/* block first */}
            <div id="companyName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="companyName" className="w-1/2 mr-1">
                        <label htmlFor="cname" className="text-sm">Company name*</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.CompanyName} onChange={handleInput} name="CompanyName" id="cname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm require" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="cNumber" className="w-1/2 mr-1 ">
                        <label  className="text-sm ">Country</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.Country} onChange={handleInput} name="Country" id="cNumber"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>
            
                {/* block second */}
              <div id="fullName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="firstName" className="w-1/2 mr-1">
                        <label htmlFor="fname" className="text-sm">First Name</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.fname} onChange={handleInput} name="fname" id="fname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="lastName" className="w-1/2 mr-1 ">
                        <label htmlFor="lname" className="text-sm">Last Name</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.lname} onChange={handleInput} name="lname" id="lname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>
              {/* block five */}
              <div id="detail" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="place" className="w-1/2 mr-1">
                        <label htmlFor="Country" className="text-sm">Email address*</label><br />
                        <input type="email" autoComplete='off' value={clientRegister.email} onChange={handleInput} name="email" id="Country"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="numbr" className="w-1/2 mr-1 ">
                        <label htmlFor="PNumber" className="text-sm">Phone number</label><br />
                        <input type="number" autoComplete='off' value={clientRegister.PNumber} onChange={handleInput} name="PNumber" id="PNumber"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>

              {/* block third */}
              <div id="address" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="add1" className="w-1/2 mr-1">
                        <label htmlFor="address1" className="text-sm">Address line 1</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.addres1} onChange={handleInput} name="addres1" id="address1"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="add2" className="w-1/2 mr-1 ">
                        <label htmlFor="address2" className="text-sm">Address line 2</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.addres2} onChange={handleInput} name="addres2" id="address2"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>

              {/* block four */}
              <div id="PostalCode" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="pCode" className="w-1/2 mr-1">
                        <label htmlFor="postal" className="text-sm">Postal PostalCode</label><br />
                        <input type="number" autoComplete='off' value={clientRegister.PostalCode} onChange={handleInput} name="PostalCode" id="postal"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="City" className="w-1/2 mr-1 ">
                        <label htmlFor="Cityname" className="text-sm">City</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.City} onChange={handleInput} name="City" id="Cityname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>


              {/* block six */}
              <div id="link" className="flex flex-row ">
                    {/* <!-- last name --> */}
                    <div id="site" className="w-1/2 mr-1 ">
                        <label htmlFor="Websitesite" className="text-sm">Website</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.Website} onChange={handleInput} name="Website" id="website"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- first name --> */}
                    <div id="mail" className="w-1/2 mr-1 ">
                        <label htmlFor="mailEmail" className="text-sm">Invoice Currency</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.InvoiceCurrency} onChange={handleInput} name="InvoiceCurrency" id="mailEmail"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
              </div>

              <label htmlFor="name" className="text-sm">Additional info</label><br />
            <input type="text" autoComplete='off' value={clientRegister.Description} onChange={handleInput} name="Description" id="name"
                className="w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm h-24" />

           
            {/* <!-- Sign up / submit button --> */}
            
            <button type="submit"  id="submit" className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm mt-3" >Submit</button>
        </form>
        {/* <div>
            {
                records.map((item)=>{
                    const { id,CompanyName } = item;
                    return(
                        <div key={id}>
                        <p>{CompanyName}</p>
                        </div>
                    )
                })
            }
        </div> */}
    </div>
</div>
  )
}
