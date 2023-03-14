import { formatJSONResponse } from "@libs/api-gateway";
import connectDB from "src/config/db";
require("dotenv").config();
import companydata from "src/models/companydata";
export const addcompanydata: any = async (event) => {
    console.log("hello");
    await connectDB();
    try {

        const data = JSON.parse(event.body);
        const createcompanydata = new companydata({
            companyname: data.companyname,
            taxno: data.taxno,
            fname: data.fname,
            lname: data.lname,
            Address1: data.Address1,
            Address2: data.Address2,
            Postalcode: data.Postalcode,
            City: data.City,
            Country: data.Country,
            Phone: data.Phone,
            email: data.email,
            website: data.website

        });
        console.log("hello")
        const companyData = await createcompanydata.save();
        console.log("Successful");
        return formatJSONResponse({ message: companyData });
    }
    catch (error) {
        console.log(error.message);
    }



};
