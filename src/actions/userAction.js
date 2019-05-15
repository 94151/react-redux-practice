import {
  UPDATE_USER_DATA,
  RESET_USER_DATA,
} from '../types';

const updateUser = (obj) => {
  console.log("ACTION===================", obj)
  return {
    type: UPDATE_USER_DATA,
    obj,
  }
}

const resetUser = () => {
  return {
    type: RESET_USER_DATA,
  }
}

export { 
  updateUser,
  resetUser,
}