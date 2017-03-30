import * as cnst from '../Common/constant';

const receiveNewInfo = (state= {}, action) =>{
    switch (action.type) {
    case cnst.RECEIVE_NEW_INFO:
      return {
        info: action.site_info
      }
    default:
      return state
  }
}

const infoFromServer = (state = [], action) => {
  switch (action.type) {
    case cnst.RECEIVE_NEW_INFO:
      return [
        ...state,
        receiveNewInfo(undefined, action)
      ]
    default:
      return state
  }
}

export default infoFromServer;

