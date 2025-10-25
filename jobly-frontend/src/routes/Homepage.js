// src/routes/Homepage.js
import React from "react";
import { Link } from "react-router-dom";

function Homepage({ currentUser }) {
  return (
    <div className="Homepage text-center mt-5">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currentUser ? (
        <h3>Welcome back, {currentUser.firstName || currentUser.username}!</h3>
      ) : (
        <p>
          <Link className="btn btn-primary mx-2" to="/login">
            Log in
          </Link>
          <Link className="btn btn-secondary" to="/signup">
            Sign up
          </Link>
        </p>
      )}
    </div>
  );
}

export default Homepage;
