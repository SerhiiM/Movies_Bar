import * as cnst from '../Common/constant';
import lodash from 'lodash';

const changeInvoicesItems = (action) => {
  const newArray=[];
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_ITEMS:
        action.receiveInvoicesItems.forEach(el => {
            if(!lodash.some(newArray,['id', el.id])){
              newArray.push(el)
            }
        })
        return lodash.uniq(newArray);
    default:
        return newArray
  }
}

const invoicesItems = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_INVOICES_ITEMS:
      return changeInvoicesItems(action)
    default:
      return state
  }
}

export default invoicesItems