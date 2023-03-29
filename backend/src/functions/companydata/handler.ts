import { formatJSONResponse } from "src/utills/ApiGateway";
import connectDB from "src/config/db";
require("dotenv").config();
import companydata from "src/models/companydata";
import { authorize } from "src/functions/authorization/handler";
export const addcompanydata: any = async (event) => {
    console.log("hello");
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            const companydatas = JSON.parse(event.body);
            const createcompanydata = new companydata({
                userid: result.userid,
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
    else {
        return formatJSONResponse(400, { data: "Session expired" });
    }


};
export const getcompanydata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            console.log("Hey");
            await connectDB();
            // const usercompanydata = await companydata.find(userid : result.userid);
            const usercompanydata = await companydata.find();
            return formatJSONResponse(200, { data: usercompanydata });
        }
        catch (err) {
            return formatJSONResponse(400, { data: "Invalid Request" });

        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });

    }
};
export const updatecompanydata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            console.log("hello");
            const data = JSON.parse(event.body);
            console.log(data);
            let companyd = await companydata.findById(data._id);
            console.log(companyd);
            companyd.companyname = data.companyname || companyd.companyname;
            companyd.taxno = data.taxno || companyd.taxno;
            companyd.fname = data.fname || companyd.fname;
            companyd.lname = data.lname || companyd.lname;
            companyd.Address1 = data.Address1 || companyd.Address1;
            companyd.Address2 = data.Address2 || companyd.Address2;
            companyd.Postalcode = data.Postalcode || companyd.Postalcode;
            companyd.City = data.City || companyd.City;
            companyd.Country = data.Country || companyd.Country;
            companyd.Phone = data.Phone || companyd.Phone;
            companyd.email = data.email || companyd.email;
            companyd.website = data.website || data.website;
            const result = await companyd.save();
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
export const deletecompanydata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            const data = JSON.parse(event.body);
            await companydata.findByIdAndDelete(data._id);
            return formatJSONResponse(200, { data: "delete successful" });
        }
        catch (err) {
            return formatJSONResponse(400, { data: "invalid details" });
        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};