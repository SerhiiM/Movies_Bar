import * as cnst from '../common/constants';

const reseiveMovieCollection = (state = {}, action) => {
  switch (action.type) {
    case cnst.RESEIVE_MOVIE_COLLECTION:
      const params =  action.params;
      return Object.assign({},state, params);
    default:
      return state
  }
}

const movie_collection = (state = {}, action) => {
  switch (action.type) {
    case cnst.RESEIVE_MOVIE_COLLECTION:
      return reseiveMovieCollection(state, action)
    case cnst.ClEAN_MOVIE_COLLECTION:
      return {}
    default:
      return state
  }
}

export default movie_collection