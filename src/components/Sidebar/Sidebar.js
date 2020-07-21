import { Avatar, Drawer, Button, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import Profilephoto from '../../assets/profile_photo.jpg';
import ChatList from './ChatList/ChatList';
import './Sidebar.css';
import { useState } from 'react';

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
    message: 'I am big',
  },
];

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
          <div className="search">
            <Autocomplete
              id="search-messages"
              freeSolo
              options={data.map((chat) => chat.message)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Messenger"
                  margin="normal"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div className="chatList">
            <ChatList data={data} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
