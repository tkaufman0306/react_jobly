// src/routes/ProfileForm.js
import React, { useState } from "react";
import JoblyApi from "../api/JoblyApi";

function ProfileForm({ currentUser }) {
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    email: currentUser?.email || "",
    password: "",
  });
  const [updated, setUpdated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await JoblyApi.saveProfile(currentUser.username, formData);
    setUpdated(true);
  };


  return (
    <div className="ProfileForm container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName" 
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input name="email" value={formData.email} onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Confirm password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Save Changes</button>
      </form>
      {updated && <p>Profile updated!</p>}
    </div>
  );
}

export default ProfileForm;
