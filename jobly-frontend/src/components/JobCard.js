// src/components/JobCard.js
import React from "react";

function JobCard({ job }) {
  return (
    <div className="JobCard card my-2 p-2">
      <h5>{job.title}</h5>
      {job.salary && <p>Salary: ${job.salary}</p>}
      {job.equity && <p>Equity: {job.equity}</p>}
    </div>
  );
}

export default JobCard;
