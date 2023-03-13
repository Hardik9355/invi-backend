export const Hello = {
    type: "object",
    properties: {
      name: { type: 'string' },
      

    },
    required: ['name']
  } ;
  export const Register = {
    type: "object",
    properties: {
        username: { type: 'string', unique : 'true' },
        fname: { type: 'string'  },
        lname: { type: 'string' },
        email: { type: 'string' ,unique : 'true'},
        password : {type : 'string'},
      

    },
    required: ['username' , 'fname' , 'lname', 'email' , 'password']
  } ;
  
  