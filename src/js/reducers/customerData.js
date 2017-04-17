import * as cnst from '../Common/constant';
import lodash from 'lodash';

const changeCustomerData = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_CUSTUMER_DATA:
        action.customerData.forEach(el => {
            if(!lodash.some(state,['id', el.id])){
              state.push(el)
            }
        })
        return lodash.uniq(state);
    default:
        return state
  }
}

const customerData = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_CUSTUMER_DATA:
      return changeCustomerData(state, action)
    default:
      return state
  }
}

export default customerData