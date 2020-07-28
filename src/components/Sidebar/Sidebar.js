import { Avatar, Drawer, TextField } from '@material-ui/core';
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

const Sidebar = (props) => {
  const [chatData, setChatData] = useState(data);
  const { drawWidth } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '8px',
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
      '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
    },
    input: {
      height: '36px',
      borderRadius: '50px',
      backgroundColor: 'rgba(0, 0, 0, .04)',
      width: drawWidth,
    },
    drawer: {
      width: drawWidth,
    },
    cssLabel: {
      lineHeight: '1px',
      '&.focused': {
        color: 'rgba(0, 0, 0, 0.54)',
      },
    },
  }));

  const classes = useStyles();

  const handleSearchChange = (text) => {
    setChatData(
      data.filter(
        (chat) =>
          chat.message.toLowerCase().includes(text.toLowerCase()) ||
          chat.from.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <>
      <Drawer variant="permanent" className={classes.drawer} anchor="left">
        <div className="sidebar">
          <div className="banner">
            <div className="avatar">
              <Avatar src={Profilephoto} />
            </div>
            <h1>Chats</h1>
          </div>
          <div className="search">
            <TextField
              label="Search Messenger"
              margin="normal"
              variant="outlined"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: 'focused',
                },
              }}
              onChange={(event) => handleSearchChange(event.target.value)}
            />
          </div>
          <div className="chatList">
            <ChatList data={chatData} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
