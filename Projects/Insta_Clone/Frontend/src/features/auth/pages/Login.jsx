import React, { useState } from "react";
import "../styles/form.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user, loading, handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
    console.log("User logged in");
    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            id="username"
            value={username}
            onInput={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button primary-button">
            Login
          </button>
        </form>
        <p>
          Dont't have an account? <Link to={"/register"}>Register.</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
