import { useState } from 'react';
import '../styles/form.scss';
import { Link } from 'react-router';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post(
        'http://localhost:3000/api/auth/login',
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => console.log(response));
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
