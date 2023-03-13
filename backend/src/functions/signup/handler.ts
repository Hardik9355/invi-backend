import { formatJSONResponse } from "@libs/api-gateway";
import connectDB from "src/config/db";
import User from "src/models/user";
export const register:any =async (event) => {
    await connectDB();
    try{const message =JSON.parse(event.body);
    const createuser = new User({
        username : message.username,
        fname : message.fname,
        lname : message.lname,
        email : message.email,
        password: message.password
    });
    const userdata = await createuser.save();
    console.log("Successful");
    return formatJSONResponse({message:userdata});
}
    catch(error){
        console.log(error.message);
    }
    

    
};

export const hello:any = async (event) => {
    const message = JSON.parse(event.body);
    return formatJSONResponse({message:`Hello ${message.name}, welcome to the exciting Serverless world!`});
  };