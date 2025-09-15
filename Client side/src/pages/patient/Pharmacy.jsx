import React, { useState } from "react";
import "./Pharmacy.css";

const Pharmacy = () => {
  const patientCity = "Nabha";

  // Example inventory
  const initialInventory = [
    { name: "Paracetamol 500mg", quantity: 50, price: 20, expected: "" },
    { name: "Ibuprofen 400mg", quantity: 30, price: 35, expected: "" },
    { name: "Amoxicillin 500mg", quantity: 0, price: 50, expected: "2025-09-18" },
    { name: "Vitamin D3 1000IU", quantity: 4, price: 80, expected: "" },
    { name: "Cough Syrup 100ml", quantity: 0, price: 60, expected: "2025-09-20" },
  ];

  const [inventory, setInventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // ascending

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSort = (field) => {
    let order = "asc";
    if (sortField === field && sortOrder === "asc") order = "desc";

    const sorted = [...inventory].sort((a, b) => {
      if (field === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return order === "asc" ? a[field] - b[field] : b[field] - a[field];
      }
    });

    setSortField(field);
    setSortOrder(order);
    setInventory(sorted);
  };

  const filteredInventory = inventory.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pharmacy-page">
      <h2>Local Pharmacy Inventory - {patientCity}</h2>

      <div className="pharmacy-controls">
        <input
          type="text"
          placeholder="Search medicine..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={() => handleSort("name")}>Sort by Name</button>
        <button onClick={() => handleSort("quantity")}>Sort by Quantity</button>
        <button onClick={() => handleSort("price")}>Sort by Price</button>
      </div>

      {filteredInventory.length === 0 ? (
        <p>No medicines found.</p>
      ) : (
        <table className="pharmacy-table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Quantity Available</th>
              <th>Price (₹)</th>
              <th>Expected Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((med, idx) => (
              <tr
                key={idx}
                className={
                  med.quantity === 0
                    ? "out-of-stock"
                    : med.quantity <= 5
                    ? "low-stock"
                    : ""
                }
              >
                <td>{med.name}</td>
                <td>{med.quantity}</td>
                <td>{med.price}</td>
                <td>{med.quantity === 0 ? med.expected : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Pharmacy;
