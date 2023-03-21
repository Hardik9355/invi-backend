export const InvoiceData = {
    type: "object",
    properties: {
        logo : {type : 'string'},
        invoiceno : {type : 'string'},
        idate : {type : 'string'},
        ddate : {type : 'string'},
        name: { type: 'string' },
        hours: { type: 'string' },
        price: { type: 'string' },
        tax: { type: 'string' },
        subtotal: { type: 'string' },
        description: { type: 'string' },


    },
    required: ['logo' , 'invoiceno', 'idate','ddate', 'name', 'hours', 'price', 'tax', "subtotal", "description"]
};

