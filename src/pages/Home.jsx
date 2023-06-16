import { Typography, Button, makeStyles } from '@material-ui/core';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      Color: '#b0beed',
    },
  },
}));

export default function Home() {
  const { isLoggedIn } = useAuth();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Welcome to Phonebook App
      </Typography>
      <Typography variant="body1">Manage your contacts with ease.</Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        {isLoggedIn ? (
          <NavLink to="/contacts" className={classes.link}>
            Get Started
          </NavLink>
        ) : (
          <NavLink to="/register" className={classes.link}>
            Get Started
          </NavLink>
        )}
      </Button>
    </div>
  );
}
