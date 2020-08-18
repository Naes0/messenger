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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((data) => setUser(data))
      .catch(console.log('not signed in'));
  }, []);

  useEffect(() => {
    setIsAuthenticated(user !== null);
  }, [user]);

  return isAuthenticated ? <Messenger /> : <LandingPage />;
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
