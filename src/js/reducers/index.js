import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import infoFromServer from './infoFromServer';

const todoApp = combineReducers({
  todos,
  infoFromServer,
  visibilityFilter
})

export default todoApp