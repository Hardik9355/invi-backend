export const InvoiceData = {
    type: "object",
    properties: {

        name: { type: 'string' },
        hours: { type: 'string' },
        price: { type: 'string' },
        tax: { type: 'string' },
        subtotal: { type: 'string' },
        description: { type: 'string' },



    },
    required: ['name', 'hours', 'price', 'tax', "subtotal", "description"]
};

