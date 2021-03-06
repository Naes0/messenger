import { Avatar, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Profilephoto from '../../assets/profile_photo.jpg';

const Chatbar = (props) => {
  const { drawWidth, chatName } = props;
  const useStyles = makeStyles((theme) => ({
    appBar: {
      width: `calc(100% - ${drawWidth}px - 30px)`,
      marginLeft: drawWidth,
      backgroundColor: '#FFFFFF',
      height: '60px',
    },
  }));
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <div className="avatar">
            <Avatar src={Profilephoto} />
          </div>
          <h1>{chatName}</h1>
        </Toolbar>
      </AppBar>
    </>
  );
};

Chatbar.propTypes = {};

Chatbar.defaultProps = {};

export default Chatbar;
