import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-20 bg-gray-700 text-white flex justify-between items-center text-2xl px-10 py-2">
      <h1>Hello Dosto: </h1>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/service">Service</NavLink>

      <div className="flex gap-10 items-center justify-center">
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 px-5 py-2 rounded-md cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="bg-gray-950 px-5 py-2 rounded-md cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
