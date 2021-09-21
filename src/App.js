import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
          <ToastContainer autoClose={1700} className="toast-container" />
          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
