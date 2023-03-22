import { formatJSONResponse } from "src/utills/ApiGateway";

import connectDB from "src/config/db";
require("dotenv").config();
import companydata from "src/models/companydata";
export const addcompanydata: any = async (event) => {
    console.log("hello");
    await connectDB();
    console.log("ansdf");
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
        return formatJSONResponse(200, { data : "Invalid details" });
    }



};
export const getcompanydata: any = async (event) => {
    try{
    console.log("Hey");
    await connectDB();
    const e = await companydata.find();
    return{
        statusCode:200,
        body: JSON.stringify(e),
    };
}
catch(err){
    console.log(err.message);

}
};


