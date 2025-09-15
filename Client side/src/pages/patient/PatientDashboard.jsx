import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./PatientDashboard.css";

const PatientDashboard = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Patient Portal</div>
        <ul className="nav-links">
          <li><Link to="appointments">Appointments</Link></li>
          <li><Link to="reports">Reports</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="pharmacy" >Pharmacy </Link></li>
        </ul>
      </nav>

      <div className="dashboard-content">
        <h1>Welcome to your Dashboard</h1>
        <p>Select an option from the navbar to continue.</p>

        {/* Render the nested route content here */}
        <Outlet />
      </div>
    </div>
  );
};

export default PatientDashboard;
