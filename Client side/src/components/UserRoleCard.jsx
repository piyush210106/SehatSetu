import React from 'react';
import './UserRoleCard.css'; // Optional: styling

const UserRoleCard = ({ title, description, onClick }) => {
  return (
    <div className="role-card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default UserRoleCard;
