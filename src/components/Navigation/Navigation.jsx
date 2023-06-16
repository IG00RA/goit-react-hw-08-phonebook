import { useAuth } from 'hooks';
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

export const Navigation = () => {
  const classes = useStyles();
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Button className={classes.button}>
        <NavLink className={classes.link} to="/">
          Home
        </NavLink>
      </Button>
      {isLoggedIn && (
        <Button className={classes.button}>
          <NavLink className={classes.link} to="/contacts">
            Contacts
          </NavLink>
        </Button>
      )}
    </nav>
  );
};
