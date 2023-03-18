

import { handlerPath } from '@libs/handler-resolver';

export const axiosfunctions = {
    axiosdata: {
    handler: `${handlerPath(__dirname)}/handler.corsfunction`,
    event:[
        {
            http:{
                path: 'https://invi-frontend-ox42.vercel.app/',
                method : 'get',
                cors : true
            }
        }
    ],
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
   
      
          