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
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

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

const ChatList = () => {
  const classes = useStyles;
  return (
    <div className="ChatList">
      <List className={classes.root}>
        {data.map((chat) => (
          <ChatPreview key={chat.id} {...chat} />
        ))}
      </List>
    </div>
  );
};

const ChatPreview = (props) => {
  const classes = useStyles;
  const { from, message } = props;
  return (
    <>
      <ListItem alignItems="flex-start">
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
      <Divider variant="fullwidth" component="li" />
    </>
  );
};

ChatList.propTypes = {};

ChatList.defaultProps = {};

export default ChatList;
