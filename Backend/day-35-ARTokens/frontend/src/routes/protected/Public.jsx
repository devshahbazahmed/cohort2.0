import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const Public = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) return <h1>Loading...</h1>;

  if (user) <Navigate to="/" />;
  return <Outlet />;
};

export default Public;
