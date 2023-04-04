import mongoose from "mongoose";
const clientdata = new mongoose.Schema({

    userid: {
        type: "String",
    },
    companyname: {
        type: "String",
        required: true,
    },
    fname: {
        type: "String",
        required: true
    },
    lname: {
        type: "String",
        required: true
    },
    Address1: {
        type: "String",
        required: true
    },
    Address2: {
        type: "String",
        required: true
    },
    Postalcode: {
        type: "Number",
        required: true
    },
    City: {
        type: "String",
        required: true
    },
    Country: {
        type: "String",
        required: true
    },
    Phone: {
        type: "Number",

    },
    email: {
        type: "String",
        required: true
    },
    website: {
        type: "String",

    },
    information: {
        type: "String"
    },
    InvoiceCurrency: {
        type: "String"
    }


});
export interface ClientDoc extends mongoose.Document {

    userid: String,
    companyname: String,
    fname: String,
    lname: String,
    Address1: String,
    Address2: String,
    Postalcode: Number,
    City: String,
    Country: String,
    Phone: Number,
    email: String,
    website: String,
    information: String,
    InvoiceCurrency: String



}

export default mongoose.model<ClientDoc>('Client', clientdata);
