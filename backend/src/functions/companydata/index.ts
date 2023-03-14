import { CompanyData } from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const companyfunctions = {
    addcompanydata: {
    handler: `${handlerPath(__dirname)}/handler.addcompanydata`,
    events: [
      {
        http: {
          method: 'post',
          path: 'addcompanydata',
          request: {
            schemas: {
              'application/json': CompanyData,
            },
          },
        },
      },
    ],
  },
}