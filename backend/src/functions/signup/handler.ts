import { formatJSONResponse } from "@libs/api-gateway";
import connectDB from "src/config/db";
import bcrypt from "bcryptjs";
require("dotenv").config();
import token from "jsonwebtoken";
import User from "src/models/user";
export const register: any = async (event) => {
    console.log("hello");
    await connectDB();
    try {

        const message = JSON.parse(event.body);
        console.log(message);
        const saltRounds = 10;
        const password = message.password;
        // bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const createuser = new User({
            fname: message.fname,
            lname: message.lname,
            email: message.email,
            password: hashedPassword

        });
        console.log("hello")
        const userdata = await createuser.save();
        console.log("Successful");
        return formatJSONResponse({ message: userdata });
    }
    catch (error) {
        console.log(error.message);
    }



};
export const login: any = async (event) => {

    try {
        await connectDB();
        
        console.log("Hey");
        const message = JSON.parse(event.body);
        console.log(message);
        let loginuser = await User.findOne({ email: message.email });
        console.log(loginuser);
        const result = await bcrypt.compare(message.password, loginuser.password);
        console.log("hello");
        if (result == true) {
            const tokens = token.sign(
                { email: loginuser.email, id: loginuser._id },
                
            );
            return formatJSONResponse({tokens});
            
        }
        else {
            const response = {
                statusCode: 400,

                body: JSON.stringify({ message: 'Invalid Detailsssssss' })
            }; return response;

        }

    }

    catch (error) {
        console.log("invalid details");
    }
};
export const getuserdata: any = async (event) => {
    try {
        console.log("Hey");
        await connectDB();
        const e = await User.find();
        return {
            statusCode: 200,
            body: JSON.stringify(e),
        };
    }
    catch (err) {
        console.log(err.message);

    }
};

