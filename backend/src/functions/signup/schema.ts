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
       
        fname: { type: 'string'  },
        lname: { type: 'string' },
        email: { type: 'string' ,unique : 'true'},
        password : {type : 'string'},
     
      

    },
    required: ['fname' , 'lname', 'email' , 'password']
  } ;
  
  