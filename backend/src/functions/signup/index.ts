import {Hello , Register} from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const functions ={
  hello:{
    handler: `${handlerPath(__dirname)}/handler.hello`,
    events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': Hello,
          },
        },
      },
    },
  ],
},
register:{
    handler: `${handlerPath(__dirname)}/handler.register`,
    events: [
    {
      http: {
        method: 'post',
        path: 'register',
        request: {
          schemas: {
            'application/json': Register,
          },
        },
      },
    },
  ],
},
};
