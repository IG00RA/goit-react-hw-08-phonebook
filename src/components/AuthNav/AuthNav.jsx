import Button from '@mui/material/Button';
import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Button
        sx={{
          color: 'white',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: '#d3ddff',
          },
        }}
      >
        <StyledNavLink to="/register">Register</StyledNavLink>
      </Button>
      <Button
        sx={{
          color: 'white',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: '#d3ddff',
          },
          marginLeft: '10px',
        }}
      >
        <StyledNavLink to="/login">Log In</StyledNavLink>
      </Button>
    </div>
  );
};
