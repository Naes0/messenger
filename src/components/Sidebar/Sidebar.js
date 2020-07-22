import {
  Avatar,
  Drawer,
  Button,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
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
  {
    id: 4,
    from: 'Daniel Gan',
    message: 'I am small',
  },
];

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    height: '36px',
    borderRadius: '50px',
    backgroundColor: 'rgba(0, 0, 0, .04)',
  },
  margin: {
    margin: theme.spacing(0.5),
  },
}));

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const classes = useStyles();
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
              classes={classes}
              freeSolo
              options={data.map((chat) => chat.message)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={classes.margin}
                  label="Search Messenger"
                  margin="normal"
                  varient="outlined"
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
