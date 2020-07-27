import React from 'react';
import './Messenger.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chatbar from './components/Chatbar/Chatbar';

const Messenger = () => {
  const maxDrawWidth = 390;

  return (
    <div className="Messenger">
      <Chatbar drawWidth={maxDrawWidth} />
      <Sidebar drawWidth={maxDrawWidth} />
    </div>
  );
};

export default Messenger;
