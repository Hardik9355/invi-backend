export const ClientData = {
    type: "object",
    properties: {


        companyname : {type : 'string'},
        fname: { type: 'string' },
        lname: { type: 'string' },
        Address1: { type: 'string' },
        Address2: { type: 'string' },
        Postalcode: { type: 'string' },
        City: { type: 'string' },
        Country: { type: 'string' },
        Phone: { type: 'string' },
        email: { type: 'string' },
        website: { type: 'string' },
        information : {type : 'string'},
        InvoiceCurrency : {type : 'string'}

        


    },
    required: ['companyname',  'fname', 'lname', "Address1", "Address2", "Postalcode", "City", "Country", "email" , "information"]
};

