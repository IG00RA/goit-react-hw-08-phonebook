import { Typography, Button } from '@mui/material';
import { StyledMainLink } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks';
import { Image, StyledDivHome } from './Home.styled';
import HomeImage from '../../img/main.png';

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
          <StyledMainLink to="/contacts">Get Started</StyledMainLink>
        ) : (
          <StyledMainLink to="/register">Get Started</StyledMainLink>
        )}
      </Button>
      <Image src={HomeImage} alt="Phonebook" />
    </StyledDivHome>
  );
}
