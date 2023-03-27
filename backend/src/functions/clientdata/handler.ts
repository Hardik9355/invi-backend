import { formatJSONResponse } from "src/utills/ApiGateway";

import connectDB from "src/config/db";
require("dotenv").config();
import clientdata from "src/models/clientdata";
import { authorize } from "src/functions/authorization/handler";
export const addclientdata: any = async (event) => {
    console.log("hello");

    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            const clientData = JSON.parse(event.body);
            const createclientdata = new clientdata({
                userid: result.userid,
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
                InvoiceCurrency: clientData.InvoiceCurrency,

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
    else {
        return formatJSONResponse(400, { data: "Invalid details" });
    }



};

export const getclientdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
    try {
        console.log("Hey");
        await connectDB();
        // const userclientdata = await clientdata.find(userid : result.userid);
        const userclientdata = await clientdata.find();
        
        return formatJSONResponse(200, { data: userclientdata });

    }
    catch (err) {
        return formatJSONResponse(400, { data: "Invalid request" });

    }
}
    else {
        return formatJSONResponse(400, { data: "Session Expired" });
    }
};
export const deleteclientdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();  
            const data = JSON.parse(event.body);
            await clientdata.findByIdAndDelete(data._id);
            return formatJSONResponse(200, { data: "delete successful" });
        }
        catch (err) {
            return formatJSONResponse(400, { data: "invalid details" });
        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });

    }
}
export const updateclientdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            console.log("hello");
            const data = JSON.parse(event.body);
            console.log(data);
            let clientd= await clientdata.findById(data._id);
            console.log(clientd);
            clientd.companyname = data.companyname || clientd.companyname;
            clientd.fname = data.fname || clientd.fname;
            clientd.lname = data.lname || clientd.lname;
            clientd.Address1 = data.Address1 || clientd.Address1;
            clientd.Address2 = data.Address2 || clientd.Address2;
            clientd.Postalcode = data.Postalcode || clientd.Postalcode;
            clientd.City = data.City || clientd.City;
            clientd.Country = data.Country || clientd.Country;
            clientd.Phone = data.Phone || clientd.Phone;
            clientd.email = data.email || clientd.email;
            clientd.website = data.website || clientd.website;
            clientd.information = data.information || clientd.information;
            clientd.InvoiceCurrency = data.InvoiceCurrency || clientd.InvoiceCurrency;
            const result = await clientd.save();
            console.log(result);
            return formatJSONResponse(200, { data: "Successful" });


        }
        catch {
            return formatJSONResponse(400, { data: "Invalid Operation" });

        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};