import { formatJSONResponse } from "@libs/api-gateway";
import connectDB from "src/config/db";
require("dotenv").config();
import invoicedata from "src/models/invoicedata";
export const addinvoicedata: any = async (event) => {

    console.log("hello");
    await connectDB();
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
        return formatJSONResponse({ message: invoiceData });
    }
    catch (error) {
        console.log(error.message);
    }



};
export const getinvoicedata: any = async (event) => {
    try {
        console.log("Hey");
        await connectDB();
        const e = await invoicedata.find();
        return {
            statusCode: 200,
            body: JSON.stringify(e),
        };
    }
    catch (err) {
        console.log(err.message);

    }
};

 