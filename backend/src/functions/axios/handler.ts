import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function corsfunction(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  };

  if (event.httpMethod === 'OPTIONS') {
   
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  
  return {
    statusCode: 200,
    headers,
    body: 'Hello, world!',
  };
}

export const handler = corsfunction;

