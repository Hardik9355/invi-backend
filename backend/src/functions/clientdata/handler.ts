import { formatJSONResponse } from "@libs/api-gateway";
import connectDB from "src/config/db";
require("dotenv").config();
import clientdata from "src/models/companydata";
export const addclientdata: any = async (event) => {
    console.log("hello");
    await connectDB();
    try {

        const clientData = JSON.parse(event.body);
        const createclientdata = new clientdata({
            companyname: clientData.companyname,
           
            fname: clientData.fname,
            lname: clientData.lname,
            Address1: clientData.Address1,
            Address2: clientData.Address2,
            Postalcode: clientData.Postalcode,
            City: clientData.City,
            Country: clientData.Country,
            Phone: clientData.Phone,
            email: clientData.email,
            website: clientData.website,
            information : clientData.information

        });
        console.log("hello")
        const clientDatas = await createclientdata.save();
        console.log("Successful");
        return formatJSONResponse({ message: clientDatas });
    }
    catch (error) {
        console.log(error.message);
    }



};