import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { verifyToken } from './authentication'; 

export const authorize = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult | APIGatewayEvent> => {
 
  const authToken = event.headers.Authorization || event.headers.authorization;
  
  
  const isAuthenticated = await verifyToken(authToken);
  
 
  const userRole = getUserRole(event);
  
  if (!isAuthenticated || userRole !== 'admin') {
    
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' })
    };
  }
  
    return event;
}


export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  
  const authorizedEvent = await authorize(event);
  
  if ('statusCode' in authorizedEvent) {
    
    return authorizedEvent;
  }
  
  // If the user is authorized, proceed with the normal function logic
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, World!' })
  };
  
  return response;
};