import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.username === "admin" && formData.password === "1234") {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username}
                 onChange={handleChange} required />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password}
                 onChange={handleChange} required />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
