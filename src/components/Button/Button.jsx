import React from "react";
import { Link } from "react-router";

import "./Button.css";

export default function Button({ title }) {
  return (
    <Link to={`/${title}`} className="btn basic-btn btn-secondary p-3 mt-md-4 mt-3">{title}</Link>
  );
}
