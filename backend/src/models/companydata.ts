import mongoose from "mongoose";
const companydata = new mongoose.Schema({
    companyname: {
        type: "String",
        required: true,
    },
    taxno: {
        type: "String",
        required: true,
        unique: true
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
        type: "String",
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
        type: "String",

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
    companyname: String,
    taxno: String,
    fname: String,
    lname: String,
    Address1: String,
    Address2: String,
    Postalcode: String,
    City: String,
    Country: String,
    Phone: String,
    email: String,
    website: String,



}

export default mongoose.model<CompanyDoc>('Company', companydata);
