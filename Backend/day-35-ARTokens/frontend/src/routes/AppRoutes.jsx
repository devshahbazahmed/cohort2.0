import { RouterProvider, createBrowserRouter } from 'react-router';
import AuthLayout from '../layouts/AuthLayout.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Home from '../pages/Home.jsx';
import Public from '../routes/protected/Public.jsx';
import Protected from './protected/Protected.jsx';
import { useEffect } from 'react';
import { axiosInstance } from '../config/axiosInstance.jsx';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../state/authReducer.jsx';

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/api/v1/users/me');
        console.log(response);
        dispatch(addUser(response.data.user));
      } catch (error) {
        console.log('Error is getting user data: ', error);
        dispatch(removeUser());
      }
    })();
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Public />,
      children: [
        {
          path: '',
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
      ],
    },
    {
      path: '/',
      element: <Protected />,
      children: [
        {
          path: '',
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
