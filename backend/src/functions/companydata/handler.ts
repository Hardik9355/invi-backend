import { formatJSONResponse } from "src/utills/ApiGateway";
import connectDB from "src/config/db";
require("dotenv").config();
import companydata from "src/models/companydata";
import {authorize} from "src/functions/authorization/handler";
export const addcompanydata: any = async (event) => {
    console.log("hello");
    await connectDB();
    const result = await authorize(event);
    if(result.result === true){
    try {

        const companydatas = JSON.parse(event.body);
        const createcompanydata = new companydata({
            companyname: companydatas.companyname,
            taxno: companydatas.taxno,
            fname: companydatas.fname,
            lname: companydatas.lname,
            Address1: companydatas.Address1,
            Address2: companydatas.Address2,
            Postalcode: companydatas.Postalcode,
            City: companydatas.City,
            Country: companydatas.Country,
            Phone: companydatas.Phone,
            email: companydatas.email,
            website: companydatas.website

        });
    
        console.log("hello")
        const companyData = await createcompanydata.save();
        console.log("Successful");
        return formatJSONResponse(200, { data: companyData });
    }

    catch (error) {
        return formatJSONResponse(400, { data: error.message });
    }
    }
    else{
        return formatJSONResponse(400, { data: "Session expired" });
    }


};
export const getcompanydata: any = async () => {
    try {
        console.log("Hey");
        await connectDB();
        const e = await companydata.find();
        return formatJSONResponse(200, { data: e });
    }
    catch (err) {
        return formatJSONResponse(400, { data: "Invalid Request" });

    }
};
export const updatecompanydata: any = async (event) => {
    
    try {
        await connectDB();
        console.log("hello");
        const data = JSON.parse(event.body);
        console.log(data);
        let companyd = await companydata.findById(data._id);
        console.log(companyd);
        companyd.fname = data.fname || companyd.fname;

        companyd.lname = data.lname || companyd.lname;
        companyd.Phone = data.Phone || companyd.Phone;
        companyd.email = data.email || companyd.email;
        const result = await companyd.save();
        console.log(result);
            

    } 
    catch{
        return formatJSONResponse(400, { data: "Invalid Operation" });

    }
};


