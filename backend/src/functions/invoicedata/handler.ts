import { formatJSONResponse } from "src/utills/ApiGateway";
import connectDB from "src/config/db";
require("dotenv").config();
import invoicedata from "src/models/invoicedata";
import * as AWS from "aws-sdk";
import { authorize } from "src/functions/authorization/handler";

export const addinvoicedata: any = async (event) => {
    const s3 = new AWS.S3({
        accessKeyId: process.env.accessKeyId,
        region: process.env.region
    });
    console.log("hello");

    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            const invoicedatas = JSON.parse(event.body);
            const createinvoicedata = new invoicedata({
                userid : result.userid,
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
    const result = await authorize(event);
    if (result.result === true) {
        try {
            console.log("Hey");
            await connectDB();
            const userinvoicedata = await invoicedata.find({userid:result.userid});
            return formatJSONResponse(200, { data: userinvoicedata });
        }
        catch (err) {
            return formatJSONResponse(400, { data: "Invalid Details" });
        }

    }
    else{
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};


