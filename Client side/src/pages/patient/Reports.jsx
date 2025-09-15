import React from "react";
import "./Reports.css";

const Reports = () => {
  // Example data; in a real app, fetch from backend
  const medicalRecords = [
    {
      date: "2025-09-01",
      doctor: "Dr. Sharma",
      type: "Blood Test",
      notes: "Normal CBC. Vitamin D slightly low.",
    },
    {
      date: "2025-08-15",
      doctor: "Dr. Verma",
      type: "X-Ray Chest",
      notes: "No abnormalities detected.",
    },
    {
      date: "2025-07-30",
      doctor: "Dr. Gupta",
      type: "ECG",
      notes: "Heart rate normal. No arrhythmia.",
    },
  ];

  return (
    <div className="reports-page">
      <h2>Medical Reports</h2>
      <div className="reports-container">
        {medicalRecords.length === 0 ? (
          <p>No medical records found.</p>
        ) : (
          medicalRecords.map((record, idx) => (
            <div key={idx} className="report-card">
              <p><strong>Date:</strong> {record.date}</p>
              <p><strong>Doctor:</strong> {record.doctor}</p>
              <p><strong>Type:</strong> {record.type}</p>
              <p><strong>Notes:</strong> {record.notes}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reports;
