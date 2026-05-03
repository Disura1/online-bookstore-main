import React from "react";
import styles from "./Home.module.css";

const HomePageContent = () => {
  return (
    <div className={styles.container}>

      {/* Hero */}
      <section className={styles.hero}>
        
        <aside className={styles.sidebar}>
          <ul>
            <li>Fiction Books</li>
            <li>Educational Books</li>
            <li>Children's Literature</li>
            <li>Science & Technology</li>
            <li>History & Biography</li>
            <li>Self-Help & Wellness</li>
            <li>Magazines</li>
          </ul>
        </aside>

        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <p>Special Book Collection</p>
            <h2 className={styles.bannerTitle}>
              Up to 10% <br /> off Voucher
            </h2>
            <button>Shop Now →</button>
          </div>

          <div className={styles.bannerImg}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="banner"
            />
          </div>
        </div>

      </section>

      {/* Flash Sales */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.redBar}></div>
          <span style={{ color: "#DB4444", fontWeight: "bold" }}>
            Today's
          </span>
        </div>

        <h2 className={styles.sectionTitle}>Flash Sales</h2>

        <div className={styles.grid}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={styles.card}>
              <div className={styles.imageBox}>
                <span className={styles.discount}>-40%</span>
                <img src="https://via.placeholder.com/150x200" alt="book" />
              </div>

              <h3>The Great Adventure Book</h3>

              <p className={styles.price}>
                Rs. 1,200 <span style={{ color: "#888", textDecoration: "line-through" }}>Rs. 2,000</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.redBar}></div>
          <span style={{ color: "#DB4444", fontWeight: "bold" }}>
            Categories
          </span>
        </div>

        <h2>Browse By Book Category</h2>

        <div className={styles.categories}>
          {["Novel", "Academic", "History", "Sci-Fi", "Poetry", "Business"].map(
            (cat) => (
              <div key={cat} className={styles.categoryCard}>
                <div>📚</div>
                <span>{cat}</span>
              </div>
            )
          )}
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div>
          <div>🚚</div>
          <h4>Free Delivery</h4>
          <p>Orders over Rs. 5,000</p>
        </div>

        <div>
          <div>🎧</div>
          <h4>24/7 Support</h4>
          <p>Friendly support</p>
        </div>

        <div>
          <div>🛡️</div>
          <h4>Money Back</h4>
          <p>30 day guarantee</p>
        </div>
      </section>

    </div>
  );
};

export default HomePageContent;