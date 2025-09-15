import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./LoginPatient.css";

export default function LoginPatient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: replace with real backend check
    if (email && password) {
      setLoggedIn(true); // triggers redirect
    } else {
      alert("Please enter email and password");
    }
  };

  // ✅ redirect to patient dashboard after login
  if (loggedIn) {
    return <Navigate to="/patient/dashboard" replace />;
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Patient Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
