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
        request: {
            schemas: {
              'application/json': ClientData,
            },
          },
        },
      },
    ],
  },
}