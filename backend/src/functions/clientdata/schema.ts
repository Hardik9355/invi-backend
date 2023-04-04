export const ClientData = {
    type: "object",
    properties: {

        userid : {type : 'string'},
        companyname: { type: 'string' },
        fname: { type: 'string' },
        lname: { type: 'string' },
        Address1: { type: 'string' },
        Address2: { type: 'string' },
        Postalcode: { type: 'number' },
        City: { type: 'string' },
        Country: { type: 'string' },
        Phone: { type: 'number' },
        email: { type: 'string' },
        website: { type: 'string' },
        information: { type: 'string' },
        InvoiceCurrency: { type: 'string' }




    },
    required: ['companyname', 'fname', 'lname', "Address1", "Address2", "Postalcode", "City", "Country", "email", "information", "InvoiceCurrency"]
};

