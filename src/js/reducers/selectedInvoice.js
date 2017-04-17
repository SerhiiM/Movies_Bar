import * as cnst from '../Common/constant';
import lodash from 'lodash';

const selectInvoice = (state = 0, action) => {
  switch (action.type) {
    case cnst.SELECT_INVOICE:
        return state = action.selectedInvoice;
    default:
        return state
  }
}

const selectedInvoice = (state = 0, action) => {
  switch (action.type) {
    case cnst.SELECT_INVOICE:
      return selectInvoice(state, action)
    default:
      return state
  }
}

export default selectedInvoice