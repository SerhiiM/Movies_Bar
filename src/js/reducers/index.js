import { combineReducers } from 'redux';
import infoFromServer from './infoFromServer';
import customerData from './customerData';
import invoicesList from './invoicesList';
import invoicesItems from './invoicesItems';

const reducers = combineReducers({
  customerData,
  invoicesList,
  invoicesItems
})

export default reducers