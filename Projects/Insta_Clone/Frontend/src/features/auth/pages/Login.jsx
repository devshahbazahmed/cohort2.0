import { useState } from 'react';
import '../styles/form.scss';
import { Link } from 'react-router';
import { useAuth } from '../hooks/useAuth.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useAuth();

  function handleFormSubmit(e) {
    e.preventDefault();

    handleLogin(email, password).then((res) => console.log(res));
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
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
