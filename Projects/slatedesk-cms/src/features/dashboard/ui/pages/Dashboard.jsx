import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../../shared/state/themeSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };
  return (
    <div>
      <h1>This is my home dashboard page</h1>
      <button onClick={handleThemeChange}>Toggle Theme</button>
    </div>
  );
};

export default Dashboard;
