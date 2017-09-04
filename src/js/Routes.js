import SignInModule from './pages/SignInModule';
import MoviesList from './pages/MoviesList';
import MovieDetails from './pages/MovieDetails';
import NoPage from './pages/NoPage';

import * as handlers from './RouterHandlers';

export const getAppRoutes = (store) => {
    return {
        path: `/`,
        indexRoute: {component: SignInModule},
        onEnter: handlers.onEnterSignIn,
        childRoutes: [
            {
                path: '/movies_list',
                component: MoviesList,
                onEnter: handlers.onEnterMoviesList
            },{
                path: '/movie_details',
                component: MovieDetails,
                onEnter: handlers.onEnterMovieDetails,
                childRoutes:[
                    {
                        path: ':id',
                        component: MovieDetails
                    }
                ]
            }
        ]
    };
};

// return {
//     path: `/`,
//     indexRoute: {
//         component: Login
//     },
//     onEnter: handlers.onEnterLoginModule,
//     childRoutes: [{
//             path: 'loading',
//             component: Loading,
//             onEnter: handlers.onEnterLoading
//         },
//         {
//             path: 'admin',
//             component: AdminAppLayout,
//             store: store,
//             onEnter: handlers.onEnterAdmin.bind(this, store),
//             childRoutes: [{
//                     path: 'operations',
//                     indexRoute: {
//                         components: {
//                             content: FeedbackTireCenter
//                         }
//                     },
//                     childRoutes: [{
//                             path: 'feedback',
//                             caption: "Відгуки про шинні центри",
//                             indexRoute: {
//                                 components: {
//                                     content: FeedbackTireCenter
//                                 }
//                             },