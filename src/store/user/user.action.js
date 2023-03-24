import { USER_ACTIONS_TYPE } from './user.types';

export default function setCurrentUser(user) {
  //dispatch takes in actions and fulfil it depending on which case
  return { type: USER_ACTIONS_TYPE.SET_CURRENT_USER, payload: user };
}
