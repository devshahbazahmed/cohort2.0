import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <div>
        <h1>Navbar</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
