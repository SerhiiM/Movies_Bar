import * as cnst from '../common/constants';

const reseiveMovieRecomendation = (state = {}, action) => {
  switch (action.type) {
    case cnst.RESEIVE_MOVIE_RECOMENDATION:
      const params =  action.params;
      return Object.assign({},state, params);
    default:
      return state
  }
}

const movie_recomendations = (state = {}, action) => {
  switch (action.type) {
    case cnst.RESEIVE_MOVIE_RECOMENDATION:
      return reseiveMovieRecomendation(state, action)
    case cnst.ClEAN_MOVIE_RECOMENDATION:
      return {}
    default:
      return state
  }
}

export default movie_recomendations