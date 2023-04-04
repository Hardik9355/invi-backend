import mongoose from "mongoose";
const companydata = new mongoose.Schema({
    image_url: {
        type: "String"
    },
    userid: {
        type: "String",
    },
    companyname: {
        type: "String",
        required: true,
    },
    taxno: {
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


});
export interface CompanyDoc extends mongoose.Document {

    image_url: String,
    userid: String,
    companyname: String,
    taxno: String,
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



}

export default mongoose.model<CompanyDoc>('Company', companydata);
