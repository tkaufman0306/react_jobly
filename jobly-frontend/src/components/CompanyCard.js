// src/components/CompanyCard.js
import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard card my-2 p-2">
      <Link to={`/companies/${company.handle}`}>
        <h5>{company.name}</h5>
        <p>{company.description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;
