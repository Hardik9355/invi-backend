import mongoose from "mongoose";
const User = new mongoose.Schema({
    username:{
        type: "String",
        required : true,
        unique : true 
    },
    fname:{
        type:"String",
        required : true
    },
    lname:{
        type:"String",
        required :true
    },
    email:{
        type:"String",
        required: true,
        unique : true
    },
    password:{
        type:"String",
        required : true
    }
});
export interface UserDoc extends mongoose.Document {
    username:String,
    fname:String,
    lname : String,
    email:String,
    password:String,
  }

export default mongoose.model<UserDoc>('User', User);
