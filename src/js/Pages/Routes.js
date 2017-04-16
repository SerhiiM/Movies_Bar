import Loading from './Site/Loading';
import InvoicesList from './Site/InvoicesList';
import Invoice from './Site/Invoice';

import * as handlers from './RouterHandlers';

export const getAppRoutes = () => {
    return {
        path: `/`,
        indexRoute: {component: Loading},
        onEnter: handlers.onEnterLoading,
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