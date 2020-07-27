import { Avatar, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Profilephoto from '../../assets/profile_photo.jpg';

const maxDrawWidth = 420;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${maxDrawWidth}px)`,
    marginLeft: maxDrawWidth,
  },
}));

const Chatbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

Chatbar.propTypes = {};

Chatbar.defaultProps = {};

export default Chatbar;
