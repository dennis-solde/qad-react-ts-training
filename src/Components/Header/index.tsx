import React from "react";
import { Link } from "react-router-dom";

import "./header.css"

const Header = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/jobs">Jobs</Link>
      </li>
    </ul>
  )
}

export default Header