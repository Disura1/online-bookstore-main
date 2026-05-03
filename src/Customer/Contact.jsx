import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

      <div className={styles.breadcrumb}>
        Home / <Link to="/contact">Contact</Link>
      </div>

      <div className={styles.grid}>

        {/* Info */}
        <div className={styles.infoCard}>
          <div className={styles.infoBlock}>
            <div className={styles.infoHeader}>
              <div className={styles.iconCircle}>📞</div>
              <h3>Call To Us</h3>
            </div>
            <p className={styles.infoText}>We are available 24/7</p>
            <p className={styles.infoText}>+94 711234567</p>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoHeader}>
              <div className={styles.iconCircle}>✉️</div>
              <h3>Write To Us</h3>
            </div>
            <p className={styles.infoText}>We will reply within 24 hours</p>
            <p className={styles.infoText}>books@gmail.com</p>
          </div>
        </div>

        {/* Form */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit}>

            <div className={styles.inputRow}>
              <input className={styles.input} name="name" placeholder="Name" onChange={handleChange} />
              <input className={styles.input} name="email" placeholder="Email" onChange={handleChange} />
              <input className={styles.input} name="phone" placeholder="Phone" onChange={handleChange} />
            </div>

            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Message"
              onChange={handleChange}
            />

            <div className={styles.footer}>
              <button className={styles.btn}>Send Message</button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}