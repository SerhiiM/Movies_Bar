import AppLayout from './AppLayout';
import SignInModule from './pages/SignInModule';
import MoviesList from './pages/MoviesList';
import MovieDetails from './pages/MovieDetails';
import NoPage from './pages/NoPage';

import * as handlers from './RouterHandlers';

export const getAppRoutes = (store) => {
    return {
        path: `/`,
        indexRoute: {
            component: SignInModule
        },
        onEnter: handlers.onEnterSignIn,
        childRoutes: [
            {
                path: 'auth',
                component: AppLayout,
                store: store,
                childRoutes:[
                    {
                        path: 'movies_list',
                        components: {
                            content:MoviesList
                        },
                        onEnter: handlers.onEnterMoviesList
                    },
                    {
                        path: 'movie_details',
                        components: {
                            content:MovieDetails
                        },
                        onEnter: handlers.onEnterMovieDetails,
                        childRoutes:[
                            {
                                path: ':id',
                                components: {
                                    content:MovieDetails
                                },
                            }
                        ]
                    }
                ]
            }
        ]
    };      
};
