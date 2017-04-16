import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import infoFromServer from './infoFromServer';
import customerData from './customerData';
import invoicesList from './invoicesList';

const reducers = combineReducers({
  todos,
  infoFromServer,
  visibilityFilter,
  customerData,
  invoicesList
})

export default reducers