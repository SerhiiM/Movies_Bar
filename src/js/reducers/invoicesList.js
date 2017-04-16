import * as cnst from '../Common/constant';
import lodash from 'lodash';

const changeInvoicesList = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_LIST:
        action.receiveInvoices.forEach(el => {
            if(!lodash.some(state,['id', el.id])){
              state.push(el)
            }
        })
        return lodash.uniq(state);
    default:
        return state
  }
}

const invoicesList = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_LIST:
      return changeInvoicesList(state, action)
    default:
      return state
  }
}

export default invoicesList