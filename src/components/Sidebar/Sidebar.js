import { Avatar, Drawer, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Profilephoto from '../../assets/profile_photo.jpg';
import ChatList from './ChatList/ChatList';
import './Sidebar.css';
import { useState } from 'react';

const Sidebar = (props) => {
  const { data, drawWidth, onUpdateChatName } = props;
  const [chatData, setChatData] = useState(data);

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
    drawPaper: {
      height: '100%',
      overflow: 'auto',
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

  const getChatName = (name) => {
    onUpdateChatName(name);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{ root: classes.drawer, paper: classes.drawPaper }}
        anchor="left"
      >
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
            <ChatList data={chatData} onChatSelect={getChatName} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
