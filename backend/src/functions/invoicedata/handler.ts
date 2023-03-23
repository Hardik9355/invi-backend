import { formatJSONResponse } from "src/utills/ApiGateway";
import connectDB from "src/config/db";
require("dotenv").config();
import invoicedata from "src/models/invoicedata";
import {authorize} from "src/functions/authorization/handler";
export const addinvoicedata: any = async (event) => {

    console.log("hello");
    await connectDB();
    const result = await authorize(event);
    if(result.result === true){
    try {
        const invoicedatas = JSON.parse(event.body);
        const createinvoicedata = new invoicedata({
            logo: invoicedatas.logo,
            invoiceno: invoicedatas.invoiceno,
            idate: invoicedatas.idate,
            ddate: invoicedatas.ddate,
            name: invoicedatas.name,
            hours: invoicedatas.hours,
            price: invoicedatas.price,
            tax: invoicedatas.tax,
            subtotal: invoicedatas.subtotal,
            description: invoicedatas.description,
            

        });
        console.log("hello")
        const invoiceData = await createinvoicedata.save();
        console.log("Successful");
        return formatJSONResponse(200, { data: invoiceData });
    }
    catch (error) {
        return formatJSONResponse(400, { data: error.message });
    }
}
else {
    return formatJSONResponse(400, { data: "Invalid Details" });
}



};
export const getinvoicedata: any = async (event) => {
    try {
        console.log("Hey");
        await connectDB();
        const e = await invoicedata.find();
        return formatJSONResponse(200, { data: "Successful" });
    }
    catch (err) {
        return formatJSONResponse(400, { data: "Invalid Details" });
    }

};
