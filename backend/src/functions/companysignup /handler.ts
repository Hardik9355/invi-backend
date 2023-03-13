import { formatJSONResponse } from "@libs/api-gateway";
import connectDB from "src/config/db";
import company from "src/models/company";
export const companyregister:any =async (event) => {
    await connectDB();
    try{const messages =JSON.parse(event.body);
    const createcompany = new company({
        name : messages.name,
        email : messages.email,
        password: messages.password
    });
    const companydata = await createcompany.save();
    console.log("Successful");
    return formatJSONResponse({message:companydata});
}
    catch(error){
        console.log(error.message);
    }
    

    
};