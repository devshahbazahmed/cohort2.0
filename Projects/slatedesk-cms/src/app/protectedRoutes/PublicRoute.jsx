import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
  const { employee, isLoading } = useSelector((state) => state.auth);

  if (isLoading) return <h1>Loading...</h1>;

  if (employee) return <Navigate to="/dashboard" />;

  return <Outlet />;
};

export default PublicRoute;
