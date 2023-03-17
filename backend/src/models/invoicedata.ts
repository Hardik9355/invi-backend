import mongoose from "mongoose";
const invoicedata = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    hours: {
        type: "String",
        required: true,
       
    },
    price: {
        type: "String",
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
    name: String,
    hours: String,
    price: String,
    tax: String,
    subtotal: String,
    description: String,
    
}

export default mongoose.model<InvoiceDoc>('Invoice', invoicedata);
