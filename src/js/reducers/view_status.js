import * as cnst from '../common/constants';

const changeView = (state = {}, action) => {
  switch (action.type) {
    case cnst.CHANGE_VIEW_STATUS:
      const params =  action.params;
      return Object.assign({},state, params);
    default:
      return state
  }
}

const view_status = (state = {display: 'popular_films'}, action) => {
  switch (action.type) {
    case cnst.CHANGE_VIEW_STATUS:
      return changeView(state, action)
    default:
      return state
  }
}

export default view_status