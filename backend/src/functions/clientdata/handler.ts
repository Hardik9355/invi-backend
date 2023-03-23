import { formatJSONResponse } from "src/utills/ApiGateway";

import connectDB from "src/config/db";
require("dotenv").config();
import clientdata from "src/models/clientdata";
import {authorize} from "src/functions/authorization/handler";
export const addclientdata: any = async (event) => {
    console.log("hello");

    await connectDB();
    const result = await authorize(event);
    if(result.result === true){
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
            information: clientData.information,
            InvoiceCurrency : clientData.InvoiceCurrency,

        });
        console.log("hello")
        const clientDatas = await createclientdata.save();
        console.log("Successful");
        return formatJSONResponse(200, { data: clientDatas });
    }
    catch (error) {
        return formatJSONResponse(400, { data: error.message });
    }
}
else{
    return formatJSONResponse(400, { data: "Invalid details" });
}



};

export const getclientdata: any = async (event) => {
    try {
        console.log("Hey");
        await connectDB();
        const e = await clientdata.find();

        return formatJSONResponse(200, { data: e });

    }
    catch (err) {
        return formatJSONResponse(400, { data: "Invalid request" });

    }
};
export const deleteclientdata:any = async(event) =>{
    try{
        await connectDB();
        const data = JSON.parse(event.body);
        await clientdata.findByIdAndDelete(data._id);
        return formatJSONResponse(200, { data: "delete successful" });
    }
    catch(err){
        return formatJSONResponse(400, { data: "invalid details" });
    }
}