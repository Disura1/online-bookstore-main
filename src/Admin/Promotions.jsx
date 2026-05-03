import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Promotions.css";

const Promotions = () => {
  const [promos, setPromos] = useState([]);

  const deletePromo = (id) => {
    if (window.confirm("Delete this promotion?")) {
      setPromos(promos.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="promo-container">
      <h2 className="text-white mb-3">Promotions</h2>

      <div className="table-box">
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Promo ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {promos.length === 0 ? (
              [...Array(10)].map((_, i) => (
                <tr key={i}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-btns">
                    <button className="edit-btn">✏️</button>
                    <button className="delete-btn">🗑️</button>
                  </td>
                </tr>
              ))
            ) : (
              promos.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>
                    <img src={p.image} alt="" width="40" />
                  </td>
                  <td className="action-btns">
                    <button className="edit-btn">✏️</button>
                    <button
                      className="delete-btn"
                      onClick={() => deletePromo(p.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Button */}
      <div className="text-center mt-4">
        <button className="add-btn">
          + Add Promo
        </button>
      </div>
    </div>
  );
};

export default Promotions;