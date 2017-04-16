import * as cnst from '../Common/constant';

const changeInvoicesList = (state = new Set(), action) => {
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_LIST:
        action.receiveInvoices.forEach(el => {
            state.add(el)
        })
        return state
    default:
        return state
  }
}

const invoicesList = (state = new Set(), action) => {
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_LIST:
      return changeInvoicesList(state, action)
    default:
      return state
  }
}

export default invoicesList