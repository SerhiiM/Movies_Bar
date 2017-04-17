import * as cnst from '../Common/constant';
import lodash from 'lodash';

const changeInvoicesItems = (state = [],action) => {
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_ITEMS:
        action.receiveInvoicesItems.forEach(el => {
            if(!lodash.some(state,['id', el.id])){
              state.push(el)
            }
        })
        return lodash.uniq(state);
    case cnst.ADD_NEW_INVOICE_ITEM:
        state.push(action.invoice_item);
        return lodash.uniq(state);
    default:
        return state
  }
}

const invoicesItems = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_ITEMS:
      return changeInvoicesItems(state,action)
    case cnst.ADD_NEW_INVOICE_ITEM:
      return changeInvoicesItems(state,action)
    default:
      return state
  }
}

export default invoicesItems