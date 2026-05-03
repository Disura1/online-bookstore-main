import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import styles from "./Signup.module.css";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedInUser = await login(form.email, form.password);

    if (loggedInUser) {
      alert("Login successful!");
      const target = loggedInUser.role === "admin" ? "/Cashier" : "/";
      navigate(target);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        {/* Left Side - Image (Matching Signup) */}
        <div className={styles.left}>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000"
            alt="books"
          />
          <div className={styles.overlay}>
            <div className={styles.tag}>Bookstore</div>
            <div className={styles.text}>Welcome back, Reader.</div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className={styles.right}>
          <div className={styles.logo}>
            <div className={styles.dot}></div>
            <span>Books.com</span>
          </div>

          <h1 className={styles.heading}>Log in to Books</h1>
          <p className={styles.subtext}>Enter your details below</p>

          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <div className={styles.bar}></div>
            </div>

            <div className={styles.field}>
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <div className={styles.bar}></div>
            </div>

            <button type="submit" className={styles.primaryBtn}>
              Log In
            </button>

            <div className={styles.divider}>or</div>

            <button type="button" className={styles.googleBtn}>
              Log in with Google
            </button>
          </form>

          <p className={styles.login}>
            Don't have an account?{" "}
            <button
              type="button"
              className={styles.loginBtn}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
