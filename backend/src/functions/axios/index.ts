
import { handlerPath } from '@libs/handler-resolver';

export const axiosfunctions = {
    axiosdata: {
    handler: `${handlerPath(__dirname)}/handler.axioshandler`,
    events: [
      {
        http: {
          method: 'post',
          path: 'api',
          
        },
      },
    ],
  },
}