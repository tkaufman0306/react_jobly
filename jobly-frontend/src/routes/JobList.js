// src/routes/JobList.js
import React, { useState, useEffect } from "react";
import JoblyApi from "../api/JoblyApi";
import JobCard from "../components/JobCard";
import LoadingSpinner from "../components/LoadingSpinner";

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      const res = await JoblyApi.getJobs();
      setJobs(res);
    }
    fetchJobs();
  }, []);

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList container">
      <h2>Jobs</h2>
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  );
}

export default JobList;
