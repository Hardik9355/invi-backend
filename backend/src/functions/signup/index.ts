import { Register } from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const functions = {
  register: {
    handler: `${handlerPath(__dirname)}/handler.register`,
    events: [
      {
        http: {
          method: 'post',
          path: 'register',
          cors : true,
          request: {
            schemas: {
              'application/json': Register,
            },
          },
        },
      },
    ],
  },
  loginuser: {
    handler: `${handlerPath(__dirname)}/handler.login`,
    events: [
      {
        http: {
          method: 'post',
          path: 'login',
          cors : true,
        }
      }
    ]
  }
};
