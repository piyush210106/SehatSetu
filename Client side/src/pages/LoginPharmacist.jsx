import React from 'react';
import './LoginPharmacist.css';

const LoginPharmacist = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add pharmacist login logic here
  };

  return (
    <div className="login-container">
      <h2>Pharmacist Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" placeholder="Pharmacist Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPharmacist;
