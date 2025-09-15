import React from "react";
import "./Profile.css";

const Profile = () => {
  // Example patient data; in real app, fetch from backend
  const patientInfo = {
    name: "Devansh Pundir",
    age: 20,
    gender: "Male",
    email: "pundirdevansh04@gmail.com",
    phone: "+91 9149118105",
    city: "Saharanpur",
    bloodGroup: "B+",
    emergencyContact: "+91 9123456780",
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {patientInfo.name}</p>
        <p><strong>Age:</strong> {patientInfo.age}</p>
        <p><strong>Gender:</strong> {patientInfo.gender}</p>
        <p><strong>Email:</strong> {patientInfo.email}</p>
        <p><strong>Phone:</strong> {patientInfo.phone}</p>
        <p><strong>City:</strong> {patientInfo.city}</p>
        <p><strong>Blood Group:</strong> {patientInfo.bloodGroup}</p>
        <p><strong>Emergency Contact:</strong> {patientInfo.emergencyContact}</p>
      </div>
    </div>
  );
};

export default Profile;
