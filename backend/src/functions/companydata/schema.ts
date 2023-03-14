export const CompanyData = {
    type: "object",
    properties: {

        companyname: { type: 'string' },
        taxno: { type: 'string' },
        fname: { type: 'string' },
        lname: { type: 'string' },
        Address1: { type: 'string' },
        Address2: { type: 'string' },
        Postalcode: { type: 'string' },
        City: { type: 'string' },
        Country: { type: 'string' },
        Phone: { type: 'string' },
        email: { type: 'string' },
        website: { type: 'string', unique: 'true' },


    },
    required: ['companyname', 'taxno', 'fname', 'lname', "Address1", "Address2", "Postalcode", "City", "Country", "email"]
};

