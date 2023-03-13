import mongoose from "mongoose";
const company  = new mongoose.Schema({
    name:{
        type: "String",
        required : true,
    },
    email:{
        type:"String",
        required : true,
        unique : true
    },
    password:{
        type:"String",
        required :true
    },
    
});
export interface CompanyDoc extends mongoose.Document {
    name:String,
    email:String,
    password : String,
  }

export default mongoose.model<CompanyDoc>('Company', company);
