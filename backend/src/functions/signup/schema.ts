export const Register = {
  type: "object",
  properties: {
    fname: { type: 'string' },
    lname: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },



  },
  required: ['fname', 'lname', 'email', 'password']
};