import { NavLink } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#d3ddff',
    },
    marginLeft: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      Color: '#b0beed',
    },
  },
}));

export const AuthNav = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button}>
        <NavLink to="/register" className={classes.link}>
          Register
        </NavLink>
      </Button>
      <Button className={classes.button}>
        <NavLink to="/login" className={classes.link}>
          Log In
        </NavLink>
      </Button>
    </div>
  );
};
