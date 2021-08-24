import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface Props {}

export const LeftNavBar = (props: Props) => {
  return (
    <Router>
      <nav className="bg-gray-900 w-1/6 h-screen">
        <div className="flex flex-col p-4 text-white">
          <Link to="/">Home</Link>
          <Link to="/createProject">Create Project</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>
    </Router>
  );
};
