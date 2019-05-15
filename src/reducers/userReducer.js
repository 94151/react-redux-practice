import {
  UPDATE_USER_DATA,
  RESET_USER_DATA,
} from '../types';

const initialState =  {
  userData: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
    console.log("REDUCER===================", action)
      return Object.assign({}, state, {
        userData: action.obj
      })

    case RESET_USER_DATA:
      return Object.assign({}, state, {
        userData: []
      })

    default:
      return state
  }
}

export default userReducer;