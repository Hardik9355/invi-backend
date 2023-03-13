import { formatJSONResponse } from "@libs/api-gateway";
import connectDB from "src/config/db";
import bcrypt from "bcryptjs";
import User from "src/models/user";
export const register:any =async (event) => {
    console.log("hello");
    await connectDB();
    try{
        
        const message =JSON.parse(event.body);
        const saltRounds = 10;
        const password = message.password;
        // bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
        const hashedPassword = await bcrypt.hash(password , saltRounds);
        const createuser = new User({
        fname : message.fname,
        lname : message.lname,
        email : message.email,
        password: hashedPassword
      
    });
    console.log("hello")
    const userdata = await createuser.save();
    console.log("Successful");
    return formatJSONResponse({message:userdata});
}
    catch(error){
        console.log(error.message);
    }
    

    
};
