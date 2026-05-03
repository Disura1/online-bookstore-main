import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Setting.css";

const AdminSettings = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h4 className="text-white mb-4">Admin Dashboard</h4>
        <ul>
          <li>Dashboard</li>
          <li>Categories</li>
          <li>Products / Items</li>
          <li>Customers</li>
          <li>Orders</li>
          <li>Reviews</li>
          <li>Contact</li>
          <li>Lendings</li>
          <li>Cashier</li>
          <li>Promotions</li>
          <li className="active">Settings</li>
        </ul>
      </div>

      {/* Main */}
      <div className="main w-100">
        
        {/* Topbar */}
        <div className="topbar d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control search"
            placeholder="Search here"
          />

          <div className="d-flex align-items-center">
            <span className="me-3 text-white">👤 Admin</span>
            <button className="btn btn-danger">Logout</button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="container mt-4">
          <h3 className="text-white">Admin Profile</h3>

          <div className="profile-card">
            <div className="d-flex align-items-center">
              <div className="avatar"></div>
              <div className="ms-3">
                <h5>Full Name</h5>
                <p>Admin</p>
              </div>
            </div>
          </div>

          <div className="profile-card mt-3">
            <h5>Personal Information</h5>

            <div className="row mt-3">
              <div className="col-md-6">
                <input className="form-control mb-2" placeholder="First Name" />
                <input className="form-control mb-2" placeholder="NIC" />
                <input className="form-control mb-2" placeholder="Email" />
              </div>

              <div className="col-md-6">
                <input className="form-control mb-2" placeholder="Last Name" />
                <input className="form-control mb-2" placeholder="Phone" />
                <input className="form-control mb-2" placeholder="Address" />
              </div>
            </div>

            <button
              className="btn btn-primary mt-3"
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="custom-modal">
          <div className="modal-box">
            <div className="d-flex justify-content-between">
              <h4>Update Admin</h4>
              <span className="close" onClick={() => setShowModal(false)}>
                ×
              </span>
            </div>

            <form>
              <input className="form-control mb-2" placeholder="First Name" />
              <input className="form-control mb-2" placeholder="Last Name" />
              <input className="form-control mb-2" placeholder="NIC" />
              <input
                type="date"
                className="form-control mb-2"
              />
              <input className="form-control mb-2" placeholder="Email" />
              <input className="form-control mb-2" placeholder="Phone" />
              <textarea
                className="form-control mb-2"
                placeholder="Address"
              ></textarea>
              <input className="form-control mb-2" placeholder="Postal Code" />

              <button className="btn btn-success w-100">Update</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;