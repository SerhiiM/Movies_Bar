import { combineReducers } from 'redux';

import movies from './movies';
import view_status from './view_status';
import movie_details from './movie_details';
import movie_recomendations from './movie_recomendations';
import movie_collection from './movie_collection';
import {reducer as notifications} from 'react-notification-system-redux';
import progress_bars from './progress_bars';

const MoviesApp = combineReducers({
  movies,
  view_status,
  movie_details,
  movie_recomendations,
  movie_collection,
  notifications,
  progress_bars
})

export default MoviesApp