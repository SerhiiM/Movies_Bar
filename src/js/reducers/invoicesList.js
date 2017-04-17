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
    case cnst.ADD_NEW_INVOICES:
        action.receiveInvoices.forEach(el => {
            if(!lodash.some(state,['id', el.id])){
              state.push(el)
            }
        })
        return lodash.uniq(state);
    case cnst.UPDATE_INVOICES_LIST:
        const newList = state.map(el=>{
            if(el.id === action.invoice_list.id){
              return Object.assign(el, action.invoice_list);
            }
            return el
        })
        return lodash.uniq(newList);
    default:
        return state
  }
}

const invoicesList = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_LIST:
      return changeInvoicesList(state, action)
    case cnst.ADD_NEW_INVOICES:
      return changeInvoicesList(state, action)
    case cnst.UPDATE_INVOICES_LIST:
      return changeInvoicesList(state, action)
    default:
      return state
  }
}

export default invoicesList