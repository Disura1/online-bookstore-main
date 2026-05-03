import React, { useState } from 'react';
import styles from './Cart.module.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "The Alchemist (Hardcover)",
      price: 1250,
      quantity: 1,
      img: "https://via.placeholder.com/50x60?text=Book"
    },
    {
      id: 2,
      name: "Madol Doova - Martin Wickramasinghe",
      price: 850,
      quantity: 2,
      img: "https://via.placeholder.com/50x60?text=Book"
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className={styles.container}>

      <nav className={styles.breadcrumb}>
        Home / <span>Cart</span>
      </nav>

      <div className={styles.headerRow}>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className={styles.rightText}>Subtotal</div>
      </div>

      {cartItems.map(item => (
        <div key={item.id} className={styles.cartRow}>
          
          <div className={styles.product}>
            <div className={styles.imgWrapper}>
              <span 
                onClick={() => handleRemoveItem(item.id)}
                className={styles.removeBtn}
              >×</span>
              <img src={item.img} alt="Book" />
            </div>
            <span>{item.name}</span>
          </div>

          <div>Rs. {item.price.toLocaleString()}</div>

          <div>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              className={styles.qtyInput}
            />
          </div>

          <div className={styles.rightText}>
            Rs. {(item.price * item.quantity).toLocaleString()}
          </div>

        </div>
      ))}

      {cartItems.length === 0 && (
        <p className={styles.empty}>Your cart is currently empty.</p>
      )}

      <div className={styles.actions}>
        <button className={styles.btn}>Return To Shop</button>
        <button className={styles.btn}>Update Cart</button>
      </div>

      <div className={styles.summarySection}>
        
        <div className={styles.coupon}>
          <input type="text" placeholder="Coupon Code" className={styles.input} />
          <button className={styles.primaryBtn}>Apply Coupon</button>
        </div>

        <div className={styles.summaryBox}>
          <h3>Cart Total</h3>

          <div className={styles.summaryRow}>
            <span>Subtotal:</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className={styles.totalRow}>
            <span>Total:</span>
            <span><b>Rs. {subtotal.toLocaleString()}</b></span>
          </div>

          <button className={styles.checkoutBtn}>
            Process to checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartPage;