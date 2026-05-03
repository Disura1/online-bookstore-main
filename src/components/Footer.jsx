import styles from "./Footer.module.css";

export default function Footer() {
  const accountLinks = [
    { label: "My Account", href: "/account" },
    { label: "Login / Register", href: "/login" },
    { label: "Cart", href: "/cart" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Shop", href: "/shop" },
  ];

  const quickLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms Of Use", href: "/terms" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", icon: "f" },
    { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
    { label: "Instagram", href: "https://instagram.com", icon: "ig" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  ];

  return (
    <footer className={styles.footer}>
      
      <div className={styles.grid}>

        {/* Brand */}
        <div>
          <a href="/" className={styles.brand}>Books.com</a>

          <p className={styles.subscribeText}>Subscribe</p>
          <p className={styles.subNote}>Get 10% off your first order</p>

          <div className={styles.subscribeBox}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button className={styles.sendBtn}>→</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <p className={styles.sectionTitle}>Support</p>

          <p className={styles.text}>
            26/2A, Nugegoda,<br />Sri Lanka
          </p>

          <a href="mailto:books@gmail.com" className={styles.link}>
            books@gmail.com
          </a><br/>

          <a href="tel:+94711234567" className={styles.link}>
            +94 711234567
          </a>
        </div>

        {/* Account */}
        <div>
          <p className={styles.sectionTitle}>Account</p>
          <ul className={styles.list}>
            {accountLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <p className={styles.sectionTitle}>Quick Link</p>
          <ul className={styles.list}>
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className={styles.sectionTitle}>Download App</p>
          <div className={styles.social}>
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        © Copyright 2026. All right reserved
      </div>

    </footer>
  );
}