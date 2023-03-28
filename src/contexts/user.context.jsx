import { createContext, useEffect, useState } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils';

//purpose of default value: https://stackoverflow.com/questions/49949099/react-createcontext-point-of-defaultvalue
const defaultValue = {
  currentUser: null,
  setCurrentUser: function () {
    return null;
  },
};

//actual value I want to access
export const UserContext = createContext(defaultValue);

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

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
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
