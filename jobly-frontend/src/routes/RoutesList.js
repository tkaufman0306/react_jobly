// src/routes/RoutesList.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

function RoutesList({ currentUser, login, signup }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage currentUser={currentUser} />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
      <Route
        path="/profile"
        element={<ProfileForm currentUser={currentUser} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
