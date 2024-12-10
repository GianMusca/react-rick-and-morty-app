import React from "react";

import "./InfoList.css";

export default function InfoList({ information }) {
  return (
      <ul className="list-group">
        <li className="r-m-info-item border-0 list-group-item  d-flex flex-column align-items-start">
          <h4 className="fw-bold info-titles">Character Status: {information.status}</h4>
        </li>
        <li className="r-m-info-item border-0 list-group-item  d-flex flex-column align-items-start">
          <h4 className="fw-bold info-titles">Species</h4>
          <p className="info-p">{information.species}</p>
        </li>
        <li className="r-m-info-item border-0 list-group-item  d-flex flex-column align-items-start">
          <h4 className="fw-bold info-titles">Origin</h4>
          <p className="info-p">{information.origin.name}</p>
        </li>
        <li className="r-m-info-item border-0 list-group-item  d-flex flex-column align-items-start">
          <h4 className="fw-bold info-titles">Gender</h4>
          <p className="info-p">{information.gender}</p>
        </li>
      </ul>
  );
}
