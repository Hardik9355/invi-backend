import connectDB from "src/config/db";
import { formatJSONResponse } from "src/utills/ApiGateway";
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
                userid: result.userid,
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
            const userinvoicedata = await invoicedata.find({ userid: result.userid });
            return formatJSONResponse(200, { data: userinvoicedata });
        }
        catch (err) {
            return formatJSONResponse(400, { data: "Invalid Details" });
        }

    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};

export const updateinvoicedata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            console.log("hello");
            const data = JSON.parse(event.body);
            console.log(data);
            let invoiced = await invoicedata.findById(data._id);
            console.log(invoiced);
            invoiced.invoiceno = data.invoiceno || invoiced.invoiceno;
            invoiced.idate = data.idate || invoiced.idate;
            invoiced.ddate = data.fname || invoiced.ddate;
            invoiced.name = data.name || invoiced.name;
            invoiced.hours = data.hours || invoiced.hours;
            invoiced.price = data.price || invoiced.price;
            invoiced.tax = data.tax || invoiced.tax;
            invoiced.subtotal = data.subtotal || invoiced.subtotal;
            invoiced.description = data.description || invoiced.description;
            

            const result = await invoiced.save();
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
export const deleteinvoicedata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            const data = JSON.parse(event.body);
            await invoicedata.findByIdAndDelete(data._id);
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