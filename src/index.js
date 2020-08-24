import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Messenger from './Messenger';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { Auth } from 'aws-amplify';
import LandingPage from './components/LandingPage/LandingPage';

Amplify.configure(awsExports);

const MessengerAuthCheck = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await Auth.currentAuthenticatedUser();
        setUser(data);
      }
      catch (e) {
        console.log('not signed in')
      }
    }
    checkAuth();
  }, []);
  return user ? <Messenger /> : <LandingPage />;
};



ReactDOM.render(
  <React.StrictMode>
    <MessengerAuthCheck />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
