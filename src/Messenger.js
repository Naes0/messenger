import React, { useState } from 'react';
import './Messenger.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chatbar from './components/Chatbar/Chatbar';

const data = [
  {
    id: 1,
    from: "Sean O'Neill",
    message: 'I am super cool and awesome and wow',
  },
  {
    id: 2,
    from: 'Soyeon Kim',
    message: 'I am super Cute',
  },
  {
    id: 3,
    from: 'Daniel Gan',
    message: 'I am super small',
  },
  {
    id: 4,
    from: 'Nhat Dao',
    message: 'I am big',
  },
  {
    id: 5,
    from: 'Nhan Dao',
    message: 'I am big',
  },
];

const Messenger = () => {
  const maxDrawWidth = 390;
  const [currentChatName, setCurrentChatName] = useState(data[0].from);

  const onUpdateChatName = (name) => {
    setCurrentChatName(name);
  };

  return (
    <div className="Messenger">
      <Chatbar drawWidth={maxDrawWidth} chatName={currentChatName} />
      <Sidebar
        data={data}
        drawWidth={maxDrawWidth}
        onUpdateChatName={onUpdateChatName}
      />
    </div>
  );
};

export default Messenger;
