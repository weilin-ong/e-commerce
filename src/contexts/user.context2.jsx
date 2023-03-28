import { createContext, useEffect, useReducer } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils';

const defaultValue = {
  currentUser: null,
  setCurrentUser: function () {
    return null;
  },
};
export const UserContext = createContext(defaultValue);

//recommended step: declare action as global const variable
export const ACTIONS_TYPE = {
  SET_CURRENT_USER: 'set_current_user',
};

//2nd step: take curr state and an action for which to call dispatch func,
//returns a new updated state(obj)
function userReducer(state, action) {
  switch (action.type) {
    case ACTIONS_TYPE.SET_CURRENT_USER:
      return {
        ...state, //maybe not needed
        currentUser: action.payload,
      };
    default:
      return new Error(`Unhandled type ${action.type} in reducer.`);
  }
}

export function UserProvider({ children }) {
  //1st step: setup useReducer with reducer func and initial val,
  //returns a state and a dispatch func(for update state)
  const [state, dispatch] = useReducer(userReducer, { currentUser: null });

  //3rd step: define a func for handling dispatch
  function setCurrentUser(user) {
    //dispatch takes in actions and fulfil it depending on which case
    dispatch({ type: ACTIONS_TYPE.SET_CURRENT_USER, payload: user });
  }

  const value = { currentUser: state.currentUser, setCurrentUser };

  useEffect(() => {
    function checkUserAuth(user) {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    }

    //returns an unsubscriber function (for cleanup)
    const unsubscribe = onAuthStateChangedListener(checkUserAuth);

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
