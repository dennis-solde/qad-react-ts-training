import React from "react";
import { Link } from "react-router-dom";

import "./header.css"

const Header = () => {
  return (
    <ul className="nav">
      <li>
      <Link to="/jobs">Jobs</Link>
      </li>
      {/* <li>
        <Link to="/post/123">Post</Link>
      </li> */}
    </ul>
  )
}

export default Header