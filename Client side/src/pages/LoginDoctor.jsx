import React from 'react';
import './LoginDoctor.css';

const LoginDoctor = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add doctor login logic here
  };

  return (
    <div className="login-container">
      <h2>Doctor Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" placeholder="Doctor Email" required />
        <input type="password" placeholder="Password" required />
        ,<input type="NMR" placeholder='NMR number' required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginDoctor;
