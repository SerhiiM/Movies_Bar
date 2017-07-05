import * as handlers from './RouterHandlers';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Loading from './pages/Loading';

export const getAppRoutes = (store) => {
    return {
        path: `/`,
        indexRoute: {
            component: Login
        },
        onEnter: handlers.onEnterLoginModule,
        childRoutes: [{
                path: 'loading',
                component: Loading,
                onEnter: handlers.onEnterLoading
            },
            {
                path: 'admin',
                indexRoute: {
                    component: NoPage
                },
                store: store,
                onEnter: handlers.onEnterAdmin.bind(this, store),
                childRoutes: [{
                    path: 'operations',
                    indexRoute: {
                        component: NoPage
                    },
                    childRoutes: [{
                        path: 'feedback',
                        component: NoPage,
                        onEnter: handlers.onEnterPage
                    }]
                }, ]
            },
        ]
    };
};