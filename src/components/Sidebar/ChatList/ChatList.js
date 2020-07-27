import React from 'react';
import PropTypes from 'prop-types';
import './ChatList.css';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
  Avatar,
  Typography,
  makeStyles,
  Divider,
} from '@material-ui/core';
import Profilephoto from '../../../assets/profile_photo.jpg';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '10px',
  },
  inline: {
    display: 'inline',
  },
}));

const ChatList = (props) => {
  const { data } = props;
  return (
    <div className="ChatList">
      <List>
        {data.map((chat) => (
          <ChatPreview key={chat.id} {...chat} />
        ))}
      </List>
    </div>
  );
};

const ChatPreview = (props) => {
  const classes = useStyles();
  const { from, message } = props;
  return (
    <>
      <ListItem
        alignItems="flex-start"
        button="true"
        className={classes.button}
      >
        <ListItemAvatar>
          <Avatar src={Profilephoto} />
        </ListItemAvatar>
        <ListItemText
          primary={from}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {message}
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
};

ChatList.propTypes = {};

ChatList.defaultProps = {};

export default ChatList;
