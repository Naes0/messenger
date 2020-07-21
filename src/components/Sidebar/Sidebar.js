import { Avatar, Drawer, Button } from '@material-ui/core';
import React from 'react';
import Profilephoto from '../../assets/profile_photo.jpg';
import ChatList from './ChatList/ChatList';
import './Sidebar.css';
import { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setSidebarOpen(open);
  };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>SIDEBAR</Button>
      <Drawer open={isSidebarOpen} onClose={toggleDrawer(false)}>
        <div className="sidebar">
          <div className="banner">
            <div className="avatar">
              <Avatar src={Profilephoto} />
            </div>
            <h1>Chats</h1>
          </div>
          <div className="search">Search</div>
          <div className="chatList">
            <ChatList />
          </div>
        </div>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
