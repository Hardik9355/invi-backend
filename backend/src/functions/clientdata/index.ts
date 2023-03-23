import { ClientData } from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const clientfunctions = {
  addclientdata: {
    handler: `${handlerPath(__dirname)}/handler.addclientdata`,
    events: [
      {
        http: {
          method: 'post',
          path: 'addclientdata',
          cors: true,
          request: {
            schemas: {
              'application/json': ClientData,
            },
          
          },
        },
      },
    ],

  },
  getclientdata: {
    handler: `${handlerPath(__dirname)}/handler.getclientdata`,
    events: [
      {
        http: {
          method: 'get',
          path: 'getclientdata',
          cors: true,

        },
      },
    ],
  },
  deleteclientdata: {
    handler: `${handlerPath(__dirname)}/handler.deleteclientdata`,
    events: [
      {
        http: {
          method: 'delete',
          path: 'deleteclientdata',
          cors: true,

        },
      },
    ],
  },
}