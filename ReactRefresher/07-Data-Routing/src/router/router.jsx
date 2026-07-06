import { createBrowserRouter } from 'react-router';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About';
import Service from '../screens/Service';
import Layout from '../layout/Layout';
import AuthLayout from '../layout/AuthLayout';
import Login from '../screens/Login';
import Register from '../screens/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'service',
        element: <Service />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);
