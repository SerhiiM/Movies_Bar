import * as cnst from '../common/constants';
import lodash from 'lodash';

const changeProgressBars = (state = [], action) => {
  switch (action.type) {
    case cnst.RESEIVE_PROGRESS_BAR:
        if(state.length > 0){
          const ifExist = state.some(el => el.title === action.progress_bar.title);
          if(ifExist){
            state.forEach(el => {
                if(lodash.some(state,['title', el.title])){
                    el.progress = action.progress_bar.progress
                }
            })            
          }else{
            state.push(action.progress_bar);
          }
        }else{
          state.push(action.progress_bar);
        }
        return lodash.uniq(state);
    default:
        return state
  }
}

const progress_bars = (state = [], action) => {
  switch (action.type) {
    case cnst.RESEIVE_PROGRESS_BAR:
      return changeProgressBars(state, action)
    case cnst.ClEAN_PROGRESS_BARS:
      return []
    default:
      return state
  }
}

export default progress_bars