import * as cnst from '../Common/constant';

const todo = (state = {}, action) => {
  switch (action.type) {
    case cnst.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case cnst.COMPLETE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case cnst.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case cnst.COMPLETE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos