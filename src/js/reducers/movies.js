import * as cnst from '../common/constants';

const reseiveMovies = (state = {}, action) => {
  switch (action.type) {
    case cnst.RESEIVE_MOVIES:
      const params =  action.params;
      return Object.assign({},state, params);
    default:
      return state
  }
}

const movies = (state = {}, action) => {
  switch (action.type) {
    case cnst.RESEIVE_MOVIES:
      return reseiveMovies(state, action)
    default:
      return state
  }
}

export default movies