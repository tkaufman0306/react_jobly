// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import RoutesList from "./routes/RoutesList";
import JoblyApi from "./api/JoblyApi";
import { jwtDecode } from "jwt-decode";

import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(null);

  // Load user from token
  useEffect(() => {
    async function fetchUser() {
      if (token) {
        try {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;
          const user = await JoblyApi.getCurrentUser(username);
          setCurrentUser(user);
        } catch (err) {
          console.error("Error loading user:", err);
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
    }
    fetchUser();
  }, [token]);

  const handleLogin = async (data) => {
    const newToken = await JoblyApi.login(data);
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleSignup = async (data) => {
    const newToken = await JoblyApi.signup(data);
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <NavBar currentUser={currentUser} logout={handleLogout} />
      <RoutesList
        currentUser={currentUser}
        login={handleLogin}
        signup={handleSignup}
      />
    </BrowserRouter>
  );
}

export default App;
