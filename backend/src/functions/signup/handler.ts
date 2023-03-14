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
        let tokens;
        console.log("Hey");
        const message = JSON.parse(event.body);
        console.log(message);
        let loginuser = await User.findOne({ email: message.email });
        // console.log(loginuser);
        const result = await bcrypt.compare(message.password, loginuser.password);
        if (result == true) {
            tokens = token.sign(
                { email: loginuser.email, id: loginuser._id },
                process.env.SECRETKEY
            );
            console.log("successfully login");

            console.log("hello");
            return formatJSONResponse({ message: tokens });

        }
        else {
            console.log("login unsuccessful");
        }

    }

    catch (error) {
        console.log("invalid details");
    }
};