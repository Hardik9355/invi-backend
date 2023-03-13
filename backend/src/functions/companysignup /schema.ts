export const companysignup = {
    type: "object",
    properties: {
        name: { type: 'string', unique : 'true'},
        email: { type: 'string'  },
        password: { type: 'string' },

    },
    required: ['name' , 'email' , 'password']
};