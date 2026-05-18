import '../styles/form.scss';
import { Link } from 'react-router';
import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onInput={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
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
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to={'/login'} className="toggleAuthForm">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
