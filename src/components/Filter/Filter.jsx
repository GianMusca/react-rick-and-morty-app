import React from "react";

import "./Filter.css"

export default function Filter({ title, filterData }) {
  return (
    <div className="form-check form-switch r-m-filter" data-bs-theme="dark">
      <input
        className="form-check-input r-m-switch"
        id={title}
        type="checkbox"
        onClick={(event) => filterData(event.target)}
        value={title}
      />
      <label className="form-check-label" htmlFor={title}>
        {title}
      </label>
    </div>
  );
}
