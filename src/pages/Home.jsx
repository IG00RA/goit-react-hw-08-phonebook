import { Typography, Button } from '@mui/material';
import { StyledNavLink } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks';
import { StyledDivHome } from './Home.styled';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <StyledDivHome>
      <Typography variant="h4" component="h1">
        Welcome to Phonebook App
      </Typography>
      <Typography variant="body1">Manage your contacts with ease.</Typography>
      <Button variant="contained" color="primary" size="large">
        {isLoggedIn ? (
          <StyledNavLink to="/contacts">Get Started</StyledNavLink>
        ) : (
          <StyledNavLink to="/register">Get Started</StyledNavLink>
        )}
      </Button>
    </StyledDivHome>
  );
}
