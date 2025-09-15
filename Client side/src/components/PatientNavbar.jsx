import { Link } from "react-router-dom";
import "./PatientNavbar.css";

export default function PatientNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Patient Portal</h1>
        <ul className="navbar-links">
          <li><Link to="/patient/dashboard">Dashboard</Link></li>
          <li><Link to="/patient/records">Medical Records</Link></li>
          <li><Link to="/patient/prescriptions">Prescriptions</Link></li>
          <li><Link to="/patient/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}
