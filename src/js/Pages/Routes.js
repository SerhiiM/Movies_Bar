import Login from './Site/Login';
import InvoicesList from './Site/InvoicesList';
import Invoice from './Site/Invoice';

import * as handlers from './RouterHandlers';

export const getAppRoutes = () => {
    return {
        path: `/`,
        indexRoute: {component: Login},
        onEnter: handlers.onEnterLogin,
        childRoutes: [
            {
                path: '/invoices_list',
                component: InvoicesList,
                onEnter: handlers.onEnterInvoicesList
            },
            {
                path: '/invoice',
                component: Invoice,
                onEnter: handlers.onEnterInvoice
            },
        ]
    };
};