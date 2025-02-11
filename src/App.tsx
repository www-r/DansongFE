import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle } from './styles/global';
import { theme } from './styles/theme';
import ModalsProvider from './Context/ModalsProvider';

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
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
