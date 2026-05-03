import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Customer/Home";
import Books from "./Customer/Books";
import BookDetails from "./Customer/BookDetails";
import Cart from "./Customer/Cart";
import Wishlist from "./Customer/Wishlist";
import Profile from "./Customer/Profile";
import Contact from "./Customer/Contact";
import Cashier from "./Admin/Cashier";
import Lendings from "./Admin/Lendings";
import Promotions from "./Admin/Promotions";
import Setting from "./Admin/Setting";
import { AuthProvider } from "./components/auth/AuthContext";
import SignupPage from "./components/auth/Signup";
import LoginPage from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute"; // Import Gatekeeper

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Contact" element={<Contact />} />

          {/* Customer Only Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Wishlist"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <ProtectedRoute allowedRoles={["customer", "admin"]}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Admin Only Routes */}
          <Route
            path="/Cashier"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Cashier />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Lendings"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Lendings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Promotions"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Promotions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Setting"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Setting />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
