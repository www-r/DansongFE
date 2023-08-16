import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle } from './styles/global';
import { theme } from './styles/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
]);

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
