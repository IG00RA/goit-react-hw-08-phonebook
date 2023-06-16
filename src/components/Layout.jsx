import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppTopBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyles';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppTopBar />
      <GlobalStyle />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
