import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const Protected = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) return <h1>Loading...</h1>;

  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default Protected;
