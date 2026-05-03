import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

export default function MyAccount() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <div className={styles.container}>

      <div className={styles.topBar}>
        <div className={styles.breadcrumb}>
          Home / <span>My Account</span>
        </div>
        <div className={styles.welcome}>
          Welcome! <span>User</span>
        </div>
      </div>

      <div className={styles.mainGrid}>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h3>Manage My Account</h3>
          <ul>
            <li className={styles.active}>My Profile</li>
            <li>Address Book</li>
            <li>Payment Options</li>
          </ul>

          <h3>My Orders</h3>
          <ul>
            <li>Returns</li>
            <li>Cancellations</li>
          </ul>

          <h3>
            <Link to="/wishlist" className={styles.wishlistLink}>
              ❤️ My Wishlist
            </Link>
          </h3>
        </div>

        {/* Form */}
        <div className={styles.formSection}>
          <h2 className={styles.title}>Edit Your Profile</h2>

          <form onSubmit={handleSubmit}>

            <div className={styles.grid}>
              <div>
                <label className={styles.label}>First Name</label>
                <input
                  className={styles.input}
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={styles.label}>Last Name</label>
                <input
                  className={styles.input}
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.grid}>
              <div>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.input}
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={styles.label}>Address</label>
                <input
                  className={styles.input}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3>Password Changes</h3>

            <div className={styles.passwordGroup}>
              <input
                className={styles.input}
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
              />

              <input
                className={styles.input}
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="New Password"
              />

              <input
                className={styles.input}
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>

            <div className={styles.buttons}>
              <button type="button" className={styles.cancel}>
                Cancel
              </button>

              <button type="submit" className={styles.save}>
                Save Changes
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}