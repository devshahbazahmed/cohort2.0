import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/form.scss";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user, loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(username, email, password);
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
        <h1>Register</h1>
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
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
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
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to={"/login"}>Login.</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
