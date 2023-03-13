import { companysignup } from "./schema";

import { handlerPath } from "@libs/handler-resolver";

export const companyfunctions = {
    companyregister:{
        handler: `${handlerPath(__dirname)}/handler.companyregister`,
        events: [
        {
          http: {
            method: 'post',
            path: 'companyregister',
            request: {
              schemas: {
                'application/json': companysignup,
              },
            },
          },
        },
      ],
    },
    };