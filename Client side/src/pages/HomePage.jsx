import React from "react";
import { Link } from "react-router-dom";
import UserRoleCard from "../components/UserRoleCard";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the SIH Health Portal</h1>
      <div className="card-grid">
        <Link to="/login/patient" className="card-link">
          <UserRoleCard
            title="Patient"
            description="Access prescriptions, medical history and consultations."
          />
        </Link>
        <Link to="/login/doctor" className="card-link">
          <UserRoleCard
            title="Doctor"
            description="Manage patients, write prescriptions, and view records."
          />
        </Link>
        <Link to="/login/pharmacist" className="card-link">
          <UserRoleCard
            title="Pharmacist"
            description="Verify and fulfill prescriptions digitally."
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
