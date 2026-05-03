import React, { useState } from "react";

export default function BookDetails() {
  const [quantity, setQuantity] = useState(2);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <style>{`
        .book-container {
          padding: 40px;
          font-family: Arial, sans-serif;
          display: flex;
          flex-wrap: wrap;
        }

        .book-left {
          display: flex;
          gap: 20px;
        }

        .book-right {
          margin-left: 40px;
          max-width: 400px;
        }

        .thumbnail-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .thumb {
          width: 60px;
          height: 80px;
          background: #ddd;
        }

        .main-image img {
          width: 300px;
          height: 450px;
          object-fit: cover;
        }

        .rating {
          margin: 10px 0;
        }

        .rating span {
          color: gray;
          margin-left: 5px;
        }

        .stock {
          color: green;
          margin-left: 10px;
        }

        .price {
          margin: 15px 0;
        }

        .info p {
          margin: 5px 0;
        }

        .cart-section {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 20px 0;
        }

        .qty-box {
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
        }

        .qty-box button {
          padding: 5px 10px;
          border: none;
          background: #eee;
          cursor: pointer;
        }

        .qty-box span {
          padding: 0 10px;
        }

        .buy-btn {
          background: #d33;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }

        .delivery-box {
          border: 1px solid #ddd;
          padding: 10px;
          margin-bottom: 10px;
        }

        .related {
          width: 100%;
          margin-top: 40px;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .card {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }

        .card-img {
          height: 150px;
          background: #eee;
          margin-bottom: 10px;
        }

        .card button {
          margin-top: 10px;
          padding: 8px;
          background: black;
          color: white;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .book-container {
            flex-direction: column;
          }

          .book-right {
            margin-left: 0;
            margin-top: 20px;
          }

          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="book-container">
        
        {/* LEFT SIDE */}
        <div className="book-left">
          <div className="thumbnail-list">
            <div className="thumb"></div>
            <div className="thumb"></div>
            <div className="thumb"></div>
          </div>

          <div className="main-image">
            <img
              src="https://via.placeholder.com/300x450"
              alt="book"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="book-right">
          <h2>AROUND THE WORLD IN MAGNETS</h2>

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>(150 Reviews)</span>
            <span className="stock">In Stock</span>
          </div>

          <h3 className="price">Rs.2400.00</h3>

          <div className="info">
            <p><b>Language:</b> English</p>
            <p><b>Author:</b> Anthony Vipin Das</p>
            <p><b>Publisher:</b> Sargasya Publishers</p>
            <p><b>ISBN:</b> 9653135044</p>
          </div>

          <div className="cart-section">
            <div className="qty-box">
              <button onClick={decreaseQty}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>

            <button className="buy-btn">Buy Now</button>
          </div>

          <div className="delivery-box">
            <p><b>🚚 Free Delivery</b></p>
            <span>Enter your postal code for Delivery Availability</span>
          </div>

          <div className="delivery-box">
            <p><b>↩ Return Delivery</b></p>
            <span>Free 7 Days Delivery Returns. Details</span>
          </div>
        </div>

        {/* RELATED */}
        <div className="related">
          <h4>Related Items</h4>

          <div className="related-grid">
            {[1, 2, 3, 4].map((item) => (
              <div className="card" key={item}>
                <div className="card-img"></div>
                <h5>Book {item}</h5>
                <p>Rs. {item * 800}</p>
                <button>Add To Cart</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}