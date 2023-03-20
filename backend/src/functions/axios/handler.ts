import { APIGatewayProxyEvent } from "aws-lambda";
import { APIGatewayProxyResult } from "aws-lambda";
import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: 'https://invi-frontend-ox42.vercel.app/',
};

app.use(cors(corsOptions));

// Your API routes here...

app.listen(3000, () => {
    console.log('Server started on port 3000');
});



export const axioshandler: any = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const response = await app(event);

        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (err) {
        console.error(err);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' }),
        };
    }
};