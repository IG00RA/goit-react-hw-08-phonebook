import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const AppTopBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">
            <Navigation />
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </header>
  );
};
