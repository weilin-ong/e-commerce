import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase.utils';

import setCurrentUser from './store/user/user.action';

import { Routes, Route } from 'react-router-dom';
import { Home, Navigation, Shop, Authentication } from './routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Checkout from './routes/Checkout/Checkout.route';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    function checkUserAuth(user) {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    }

    const unsubscribe = onAuthStateChangedListener(checkUserAuth);

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
