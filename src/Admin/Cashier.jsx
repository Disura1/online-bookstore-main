import React, { useState } from "react";
import "./Cashier.css";

const Cashier = () => {
  const [showModal, setShowModal] = useState(false);

  const [cashiers, setCashiers] = useState([
    {
      id: 1,
      email: "cashier1@example.com",
      first_name: "John",
      last_name: "Doe",
      phone: "0712345678",
      status: "active",
    },
  ]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addCashier = (e) => {
    e.preventDefault();

    const newCashier = {
      id: Date.now(),
      ...formData,
      status: "active",
    };

    setCashiers([...cashiers, newCashier]);
    setShowModal(false);
  };

  const deleteCashier = (id) => {
    if (window.confirm("Are you sure?")) {
      setCashiers(cashiers.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="cashier-container">
      <h2>Cashier</h2>

      <button className="add-btn" onClick={() => setShowModal(true)}>
        + Add Cashier
      </button>

      <table className="cashier-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {cashiers.map((c) => (
            <tr key={c.id}>
              <td>{c.email}</td>
              <td>{c.first_name}</td>
              <td>{c.last_name}</td>
              <td>{c.phone}</td>
              <td>{c.status}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => deleteCashier(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal-bg">
          <div className="modal-box">
            <div className="modal-header">
              <h3>Add Cashier</h3>
              <span onClick={() => setShowModal(false)}>×</span>
            </div>

            <form onSubmit={addCashier}>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />

              <button type="submit" className="submit-btn">
                Add Cashier
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cashier;