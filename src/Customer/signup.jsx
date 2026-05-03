import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("Account created!");
  };

  return (
    <div className={styles.root}>

      <div className={styles.card}>

        {/* Left */}
        <div className={styles.left}>
          <img src="https://via.placeholder.com/400x500" alt="books" />

          <div className={styles.overlay}>
            <div className={styles.tag}>Bookstore</div>
            <div className={styles.text}>
              Your next great read awaits.
            </div>
          </div>
        </div>

        {/* Right */}
        <div className={styles.right}>

          <div className={styles.logo}>
            <div className={styles.dot}></div>
            <span>Books.com</span>
          </div>

          <h1 className={styles.heading}>Create an account</h1>
          <p className={styles.subtext}>Enter your details</p>

          <div className={styles.field}>
            <input
              className={styles.input}
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <div className={styles.bar}></div>
          </div>

          <div className={styles.field}>
            <input
              className={styles.input}
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <div className={styles.bar}></div>
          </div>

          <div className={styles.field}>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div className={styles.bar}></div>
          </div>

          <button className={styles.primaryBtn} onClick={handleSubmit}>
            Create Account
          </button>

          <div className={styles.divider}>or</div>

          <button className={styles.googleBtn}>
            Sign up with Google
          </button>

          <p className={styles.login}>
            Already have an account?{" "}
            <button
              className={styles.loginBtn}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>

        </div>

      </div>

    </div>
  );
}