import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from '../layouts/AuthLayout';
import PublicRoute from '../protectedRoutes/PublicRoute';
import ProtectedRoute from '../protectedRoutes/ProtectedRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import LoginPage from '../../features/auth/ui/pages/LoginPage';
import Dashboard from '../../features/dashboard/ui/pages/Dashboard';
import RegisterPage from '../../features/auth/ui/pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentLoggedInEmployee } from '../../features/auth/state/auth/authAction';

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(currentLoggedInEmployee());
    })();
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRoute />,
      children: [
        {
          path: '',
          element: <AuthLayout />,
          children: [
            {
              path: 'login',
              element: <LoginPage />,
            },
            {
              path: 'register',
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
