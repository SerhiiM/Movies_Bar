import * as cnst from '../common/constants';

const reseiveMovieDetails = (state = {}, action) => {
  switch (action.type) {
    case cnst.RESEIVE_MOVIE_DETAILS:
      const params =  action.params;
      return Object.assign({},state, params);
    default:
      return state
  }
}

const movie_details = (state = {}, action) => {
  switch (action.type) {
    case cnst.RESEIVE_MOVIE_DETAILS:
      return reseiveMovieDetails(state, action)
    case cnst.ClEAN_MOVIE_DETAILS:
      return {}
    default:
      return state
  }
}

export default movie_details