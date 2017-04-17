import { combineReducers } from 'redux';
import infoFromServer from './infoFromServer';
import customerData from './customerData';
import invoicesList from './invoicesList';
import invoicesItems from './invoicesItems';
import products from './products';
import selectedInvoice from './selectedInvoice';

const reducers = combineReducers({
  customerData,
  invoicesList,
  invoicesItems,
  products,
  selectedInvoice
})

export default reducers