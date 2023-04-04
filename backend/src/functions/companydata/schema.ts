export const CompanyData = {
    type: "object",
    properties: {
        image_url : {type : "string"},
        userid: { type: "string" },
        companyname: { type: 'string' },
        taxno: { type: 'string' },
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


    },
    required: ['companyname', 'taxno', 'fname', 'lname', "Address1", "Address2", "Postalcode", "City", "Country", "email"]
};

