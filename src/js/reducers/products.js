import * as cnst from '../Common/constant';
import lodash from 'lodash';

const changeProducts = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_PRUDUCTS:
        action.products.forEach(el => {
            if(!lodash.some(state,['id', el.id])){
              state.push(el)
            }
        })
        return lodash.uniq(state);
    default:
        return state
  }
}

const products = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_PRUDUCTS:
      return changeProducts(state, action)
    default:
      return state
  }
}

export default products