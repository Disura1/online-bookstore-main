import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext(null);

// Set the base URL for your Spring Boot server
const API_BASE_URL = "http://localhost:8080/api/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, userData);
      setUser(response.data); // Store the user object returned from Java
      return response.data;
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      // Sending email and password as a body to match your AuthRequest DTO
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      setUser(response.data);
      return response.data; // This contains the role (admin/customer)
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      return null;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
