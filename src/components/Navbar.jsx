import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext"; // Import the useAuth hook

export default function Navbar() {
  const { user, logout } = useAuth(); // Destructure user and logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "9px 24px",
          fontSize: "13px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          position: "relative",
        }}
      >
        <span>
          Black Friday Sale For All Books And Free Express Delivery – OFF 50%!
        </span>
        <Link
          to="/"
          style={{
            color: "#fff",
            fontWeight: "700",
            textDecoration: "underline",
          }}
        >
          ShopNow
        </Link>
        <button
          style={{
            position: "absolute",
            right: "24px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "13px",
          }}
        >
          English ▾
        </button>
      </div>

      {/* Main Nav */}
      <nav
        style={{
          backgroundColor: "#fff",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #d4d4d4",
          gap: "16px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: "800",
            color: "#111",
            textDecoration: "none",
          }}
        >
          Books.com
        </Link>

        {/* Nav Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "28px",
            alignItems: "center",
            fontWeight: "500",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#111",
                fontSize: "15px",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              style={{
                textDecoration: "none",
                color: "#111",
                fontSize: "15px",
              }}
            >
              Contact
            </Link>
          </li>

          {/* Admin Specific Links - Only visible to Admins */}
          {user?.role === "admin" && (
            <>
              <li>
                <Link
                  to="/Cashier"
                  style={{
                    textDecoration: "none",
                    color: "#DB4444",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Cashier
                </Link>
              </li>
              <li>
                <Link
                  to="/Lendings"
                  style={{
                    textDecoration: "none",
                    color: "#111",
                    fontSize: "15px",
                  }}
                >
                  Lendings
                </Link>
              </li>
            </>
          )}

          {/* Show Sign Up only if no user is logged in */}
          {!user && (
            <li>
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "#111",
                  fontSize: "15px",
                }}
              >
                Sign Up
              </Link>
            </li>
          )}
        </ul>

        {/* Search and Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f5f5f5",
              borderRadius: "4px",
              overflow: "hidden",
              paddingRight: "8px",
            }}
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                padding: "8px 12px",
                fontSize: "13px",
                width: "180px",
              }}
            />
            <span style={{ cursor: "pointer", fontSize: "18px" }}>⌕</span>
          </div>

          {/* Action Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Wishlist Link */}
            <Link
              to="/Wishlist"
              style={{
                position: "relative",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </Link>

            {/* Cart Link */}
            <Link
              to="/Cart"
              style={{
                position: "relative",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Link>

            {/* Profile or Logout */}
            {user ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Link
                  to="/Profile"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#DB4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </Link>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "#DB4444",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#111",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
