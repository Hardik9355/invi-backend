

import { handlerPath } from '@libs/handler-resolver';

export const axiosfunctions = {
    axiosdata: {
    handler: `${handlerPath(__dirname)}/handler.axioshandler`,
    iamRoleStatements: [
        {
          Effect: "Allow",
          Action: [
            "lambda:InvokeFunction",
            "logs:CreateLogStream",
            "logs:CreateLogGroup",
            "logs:PutLogEvents",
          ],
          Resource: "*",
        },
        {
          Effect: "Allow",
          Action: [
            "execute-api:Invoke",
          ],
          Resource: "*",
        },
      ],
    }
  };
   
      
          