import { InvoiceData } from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const invoicefunctions = {
    addinvoicedata: {
    handler: `${handlerPath(__dirname)}/handler.addinvoicedata`,
    events: [
      {
        http: {
          method: 'post',
          path: 'addinvoicedata',
          cors : true,
          request: {
            schemas: {
              'application/json': InvoiceData,
            },
          },
        },
      },
    ],
  },
  getinvoicedata: {
    handler: `${handlerPath(__dirname)}/handler.getinvoicedata`,
    events: [
      {
        http: {
          method: 'get',
          path: 'getinvoicedata',
          cors : true,
        
        },
      },
    ],
  },
};
