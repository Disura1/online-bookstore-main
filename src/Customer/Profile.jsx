import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/auth/AuthContext"; // Import your Auth hook
import styles from "./Profile.module.css";

export default function MyAccount() {
  const { user } = useAuth(); // Get the logged-in user data
  
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Effect to pre-fill the form when the user data is available
  useEffect(() => {
    if (user) {
      // Logic to split name if your DB only stores 'name' instead of first/last
      const nameParts = user.name ? user.name.split(" ") : ["", ""];
      
      setForm((prev) => ({
        ...prev,
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        email: user.email || "",
        // address: user.address || "", // Uncomment if your DB has address
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would call an API here: axios.put('/api/users/update', form)
    console.log("Updating Profile for:", user.email, form);
    alert("Changes saved successfully!");
  };

  if (!user) return <div className={styles.container}>Please log in to view this page.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.breadcrumb}>
          Home / <span>My Account</span>
        </div>
        <div className={styles.welcome}>
          Welcome! <span>{user.name}</span>
        </div>
      </div>

      <div className={styles.mainGrid}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h3 className={styles.sideTitle}>Manage My Account</h3>
          <ul>
            <li className={styles.active}>My Profile</li>
            <li>Address Book</li>
            <li>Payment Options</li>
          </ul>

          <h3 className={styles.sideTitle}>My Orders</h3>
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

        {/* Form Section */}
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
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label className={styles.label}>Last Name</label>
                <input
                  className={styles.input}
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className={styles.grid}>
              <div>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  disabled // Usually email is used as ID and not changed easily
                />
              </div>

              <div>
                <label className={styles.label}>Address</label>
                <input
                  className={styles.input}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                />
              </div>
            </div>

            <h3 className={styles.passTitle}>Password Changes</h3>

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
              <button 
                type="button" 
                className={styles.cancel}
                onClick={() => window.location.reload()}
              >
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