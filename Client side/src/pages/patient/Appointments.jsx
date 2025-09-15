import React, { useState } from "react";
import "./Appointments.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
const Appointments = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
  });
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const doctors = ["Dr. Sharma", "Dr. Verma", "Dr. Gupta", "Dr. Singh"];
  const timeslots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, formData]);
    setFormData({ doctor: "", date: "", time: "" });
    setShowModal(false);
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();

    const userMessage = { role: 'User', text: chatInput};
    setChatHistory( (prev) => [...prev, userMessage]);
    setChatInput("");

    try {
      const res = await axios.post("http://localhost:3000/login/patient/appointments", {chatInput});
      console.log(res.data);
      const botMessage = { role: 'Bot', text: res.data};
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      setChatHistory((prev) => [...prev, "Something went wrong while generating response"]);
      console.log(error);
    }
  };

  return (
    <div className="appointment-page">
      <h2>Appointments</h2>

      <div className="appointments-container">
        {/* Scheduled Appointments Box */}
        <div className="scheduled-appointments">
          <h3>Scheduled Appointments</h3>
          {appointments.length === 0 ? (
            <p>No appointments yet.</p>
          ) : (
            <ul>
              {appointments.map((app, idx) => (
                <li key={idx}>
                  <strong>{app.doctor}</strong> - {app.date} at {app.time}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Floating Buttons */}
      <button
        className="open-modal-btn bottom-left"
        onClick={() => setShowModal(true)}
      >
        Book Appointment
      </button>

      <button
        className="open-modal-btn bottom-left chatbot-btn"
        onClick={() => setShowChatbot(true)}
      >
        AI Chatbot
      </button>

      {/* Appointment Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="appointment-card modal-card">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <label>
                Select Doctor:
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Choose Doctor--</option>
                  {doctors.map((doc, idx) => (
                    <option key={idx} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Time:
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Choose Time--</option>
                  {timeslots.map((time, idx) => (
                    <option key={idx} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>

              <button type="submit">Book Appointment</button>
            </form>
          </div>
        </div>
      )}

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="modal-overlay">
          <div className="appointment-card modal-card chatbot-modal">
            <button
              className="close-btn"
              onClick={() => setShowChatbot(false)}
            >
              &times;
            </button>
            <h3>AI Symptom Checker</h3>
            <div className="chat-history">
              {chatHistory.map((message, idx) => (
                <div key={idx} >
              <ReactMarkdown>{`${message.role} :: ${message.text}`}</ReactMarkdown>
            </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="chat-form">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Enter your symptoms..."
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
