import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.container}>
        <LockOutlinedIcon />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Button fullWidth variant="outlined" color="primary">
        <NavLink
          to="/register"
          style={{
            textDecoration: 'none',
            marginLeft: '8px',
            color: 'inherit',
          }}
        >
          Do not have an account? Register here
        </NavLink>
      </Button>
    </Container>
  );
};
