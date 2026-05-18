import { useState } from 'react';
import '../styles/form.scss';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { handleLogin, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    handleLogin(username, password)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((error) => {
        console.error(
          error.response?.status,
          error.response?.data || error.message
        );
      });
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onInput={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to={'/register'} className="toggleAuthForm">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
