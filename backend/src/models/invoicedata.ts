import mongoose from "mongoose";
const invoicedata = new mongoose.Schema({
    logo:{
        type:'String',
        required: true
    },
    invoiceno:{
        type:'String',
        required: true
    },
    idate:{
        type:'String',
        required: true
    },
    ddate:{
        type:'String',
        required:true
    },
    name: {
        type: "String",
        required: true,
    },
    hours: {
        type: "String",
        required: true,
       
    },
    price: {
        type: "Number",
        required: true
    },
    tax: {
        type: "String",
        
    },
    subtotal: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true
    },
    

});
export interface InvoiceDoc extends mongoose.Document {
    logo: String,
    invoiceno : String,
    idate: String,
    ddate: String,
    name: String,
    hours: String,
    price: Number,
    tax: String,
    subtotal: String,
    description: String,
    
}

export default mongoose.model<InvoiceDoc>('Invoice', invoicedata);
