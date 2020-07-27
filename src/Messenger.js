import React from 'react';
import './Messenger.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chatbar from './components/Chatbar/Chatbar';

const Messenger = () => {
  return (
    <div className="Messenger">
      <Chatbar />
      <Sidebar />
    </div>
  );
};

export default Messenger;
