import { useNavigate } from 'react-router';
import '../nav.scss';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <p>Insta</p>
      <button
        className="button primary-button"
        onClick={() => navigate('/create-post')}
      >
        New Post
      </button>
    </nav>
  );
};

export default Navbar;
