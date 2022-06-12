import { Routes, Route } from 'react-router-dom';
import { Contact, Home, Navigation, Shop, Authentication } from './routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Checkout from './routes/Checkout/Checkout.route';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='contact' element={<Contact />} />
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
