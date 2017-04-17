export const default_invoices_list = [
            {
                id:1,
                custumer_id:1,
                discount:0,
                total:60
            },{
                id:2,
                custumer_id:2,
                discount:5,
                total:200
            }
        ]

export const default_invoices_items = [
            {
                id:1,
                invoice_id:1,
                product_id:1,
                quantity:5
            },{
                id:2,
                invoice_id:1,
                product_id:2,
                quantity:10
            },
            {
                id:3,
                invoice_id:2,
                product_id:3,
                quantity:20
            }
        ]

export const default_custumers = [
            {
                id:1,
                name:'Jonny B.',
                adress:'Baker Street 221B',
                phone:'101-1-101'
            },{
                id:2,
                name:'Ann J.',
                adress:'Central Park 1',
                phone:'201-1-201'
            }
        ]

export const products = [
            {
                id:1,
                name:'Apple',
                price: 2
            },{
                id:2,
                name:'Banana',
                price: 5
            },
            {
                id:3,
                name:'Mango',
                price: 10
            }
        ]