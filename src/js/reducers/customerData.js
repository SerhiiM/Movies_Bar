import * as cnst from '../Common/constant';

const changeParams = (state = {}, action) => {
  switch (action.type) {
    case cnst.RECEIVE_CUSTUMER_DATA:
      const params =  action.params;
      return Object.assign(state, params)
    default:
      return state
  }
}

const customerData = (state = {}, action) => {
  switch (action.type) {
    case cnst.RECEIVE_CUSTUMER_DATA:
      return changeParams(state, action)
    default:
      return state
  }
}

export default customerData