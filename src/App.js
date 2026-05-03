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
// Import the Auth items
import { AuthProvider } from "./components/auth/AuthContext"; 
import SignupPage from "./components/auth/Signup";
import LoginPage from "./components/auth/Login";

function App() {
  return (
    /* Wrap the entire app in AuthProvider */
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/Cashier" element={<Cashier />} />
          <Route path="/Lendings" element={<Lendings />} />
          <Route path="/Promotions" element={<Promotions />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;