import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the hook
import styles from "./Signup.module.css";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signup(form);
      alert("Account created successfully!");
      const target = newUser.role === "admin" ? "/Cashier" : "/";
      navigate(target);
    } catch (err) {
      alert("Signup failed: " + (err.response?.data || "Server error"));
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        {/* Left Side - Image */}
        <div className={styles.left}>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000"
            alt="books"
          />
          <div className={styles.overlay}>
            <div className={styles.tag}>Bookstore</div>
            <div className={styles.text}>Your next great read awaits.</div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className={styles.right} onSubmit={handleSubmit}>
          <div className={styles.logo}>
            <div className={styles.dot}></div>
            <span>Books.com</span>
          </div>

          <h1 className={styles.heading}>Create an account</h1>
          <p className={styles.subtext}>Enter your details</p>

          {["name", "email", "password"].map((field) => (
            <div className={styles.field} key={field}>
              <input
                className={styles.input}
                name={field}
                type={field === "password" ? "password" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                onChange={handleChange}
                required
              />
              <div className={styles.bar}></div>
            </div>
          ))}

          <button type="submit" className={styles.primaryBtn}>
            Create Account
          </button>
          <div className={styles.divider}>or</div>
          <button type="button" className={styles.googleBtn}>
            Sign up with Google
          </button>

          <p className={styles.login}>
            Already have an account?{" "}
            <button
              type="button"
              className={styles.loginBtn}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
