import React from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import { Typography, makeStyles, Link, Button } from '@material-ui/core';
import messenger_logo from '../../assets/messenger_logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Auth } from 'aws-amplify';

const useStyles = makeStyles({
  header: {
    padding: '50px',
    alignItems: 'center',
    display: 'flex',
  },
  image: {
    height: '50px',
    paddingRight: '20px',
  },
  mainText: {
    fontSize: '60px',
    fontWeight: '700',
    lineHeight: '1.7',
    paddingLeft: '100px',
    paddingTop: '200px',
  },
  Typography: {
    fontWeight: '700',
  },
  list: {
    paddingLeft: '897px',
  },
  link: {
    display: 'inline-block',
    margin: '0 50px',
    fontSize: '20px',
    color: 'black',
  },
  button: {
    fontSize: '20px',
    fontWeight: '700',
    float: 'right',
  },
  loginButton: {
    paddingRight: '400px',
    paddingTop: '170px',
  },
});

const checkUser = async () => {
  const user = await Auth.currentAuthenticatedUser();
  console.log(user);
};

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className="LandingPage">
      <section>
        <header className={classes.header}>
          <img src={messenger_logo} alt="logo" className={classes.image} />
          <Typography variant="h4" align="left" className={classes.Typography}>
            Babo Messenger
          </Typography>
          <div>
            <nav className={classes.list}>
              <Link className={classes.link}>HOME</Link>
              <Link className={classes.link}>ABOUT</Link>
              <Link className={classes.link}>SERVICES</Link>
              <Link className={classes.link}>SUPPORT</Link>
            </nav>
          </div>
        </header>
      </section>
      <section id="main">
        <div className={classes.mainText}>
          <span>The messenger</span> <br /> where the chatting experience <br />
          is worse, probably.
        </div>
      </section>
      <section>
        <div className={classes.loginButton}>
          <Button
            variant="outlined"
            className={classes.button}
            startIcon={<FacebookIcon style={{ fontSize: 20 }} />}
            onClick={() =>
              Auth.federatedSignIn({
                provider: 'Facebook',
              })
            }
          >
            Login with Facebook
          </Button>
        </div>
      </section>
    </div>
  );
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
