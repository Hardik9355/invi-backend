export const Register = {
  type: "object",
  properties: {

    fname: { type: 'string' },
    lname: { type: 'string' },
    email: { type: 'string', unique: 'true' },
    password: { type: 'string' },



  },
  required: ['fname', 'lname', 'email', 'password']
};

