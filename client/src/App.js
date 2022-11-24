import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouterBranch from "RouterBranch";

import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.min.css';

//import './App.css';

import Navbar from 'layout/navbar/Navbar';
import Footer from 'layout/footer/Footer';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div style={{backgroundColor : "#eee"}}>
            <Navbar />
            <RouterBranch />
            <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
