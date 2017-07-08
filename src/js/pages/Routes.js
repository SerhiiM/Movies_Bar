import SignInModule from './SignInModule';

import * as handlers from './RouterHandlers';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';

export const getAppRoutes = () => {
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