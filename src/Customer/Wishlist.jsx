import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Wishlist.module.css";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "The Great Gatsby",
      price: 1500,
      discountPrice: 2000,
      discountBadge: "-25%",
      img: "https://via.placeholder.com/150x200"
    },
    {
      id: 2,
      name: "Organic Chemistry Guide",
      price: 3200,
      img: "https://via.placeholder.com/150x200"
    }
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Wishlist ({wishlistItems.length})
        </h2>

        <button className={styles.btn}>
          Move All To Bag
        </button>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {wishlistItems.map(item => (
          <div key={item.id} className={styles.card}>

            <div className={styles.imageBox}>

              {item.discountBadge && (
                <span className={styles.discount}>
                  {item.discountBadge}
                </span>
              )}

              <div
                onClick={() => removeItem(item.id)}
                className={styles.deleteBtn}
              >
                🗑️
              </div>

              <img src={item.img} alt={item.name} />

              <button className={styles.cartBtn}>
                🛒 Add To Cart
              </button>
            </div>

            <div className={styles.info}>
              <h3 className={styles.name}>{item.name}</h3>

              <div className={styles.priceRow}>
                <span className={styles.price}>
                  Rs. {item.price}
                </span>

                {item.discountPrice && (
                  <span className={styles.oldPrice}>
                    Rs. {item.discountPrice}
                  </span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Empty */}
      {wishlistItems.length === 0 && (
        <div className={styles.empty}>
          <p>Your wishlist is empty.</p>

          <Link to="/">
            <button className={styles.primaryBtn}>
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      {/* Recommendation */}
      <div className={styles.recommend}>
        <div className={styles.sectionHeader}>
          <div className={styles.redBar}></div>
          <h2>Just For You</h2>
        </div>
      </div>

    </div>
  );
};

export default WishlistPage;