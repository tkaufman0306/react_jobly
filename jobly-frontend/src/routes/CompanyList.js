// src/routes/CompanyList.js
import React, { useState, useEffect } from "react";
import JoblyApi from "../api/JoblyApi";
import CompanyCard from "../components/CompanyCard";
import LoadingSpinner from "../components/LoadingSpinner";

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    async function fetchCompanies() {
      const res = await JoblyApi.getCompanies();
      setCompanies(res);
    }
    fetchCompanies();
  }, []);

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="CompanyList container">
      <h2>Companies</h2>
      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ))}
    </div>
  );
}

export default CompanyList;
