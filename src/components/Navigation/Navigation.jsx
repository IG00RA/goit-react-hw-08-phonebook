import { useAuth } from 'hooks';
import { Button } from '@mui/material';
import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Button
        sx={{
          color: 'white',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: '#d3ddff',
          },
        }}
      >
        <StyledNavLink to="/">Home</StyledNavLink>
      </Button>
      {isLoggedIn && (
        <Button
          sx={{
            color: 'white',
            marginLeft: '10px',
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: '#d3ddff',
            },
          }}
        >
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </Button>
      )}
    </nav>
  );
};
