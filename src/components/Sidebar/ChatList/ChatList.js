import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
  const { data, onChatSelect } = props;
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  const selectChat = (chat) => {
    const { id, from } = chat;
    setSelected(id);
    onChatSelect(from);
  };

  return (
    <div className="ChatList">
      <List>
        {data.map((chat) => (
          <ListItem
            key={chat.id}
            alignItems="flex-start"
            button={true}
            className={classes.button}
            onClick={() => selectChat(chat)}
            selected={selected === chat.id}
          >
            <ListItemAvatar>
              <Avatar src={Profilephoto} />
            </ListItemAvatar>
            <ListItemText
              primary={chat.from}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {chat.message}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

ChatList.propTypes = {};

ChatList.defaultProps = {};

export default ChatList;
