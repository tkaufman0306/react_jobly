// src/routes/CompanyDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/JoblyApi";
import JobCard from "../components/JobCard";
import LoadingSpinner from "../components/LoadingSpinner";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany() {
      const res = await JoblyApi.getCompany(handle);
      setCompany(res);
    }
    fetchCompany();
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (
    <div className="CompanyDetail container">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <div>
        {company.jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default CompanyDetail;
