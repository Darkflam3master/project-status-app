import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

interface Props {}

export const TopNavBar = (props: Props) => {
  return (
    <Router>
      <nav className="bg-gray-900">
        <div className="bg-gray-900 flex justify-end p-4 space-x-6 text-white">
          <Link to="/">Home</Link>
          <Link to="/createProject">Create Project</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>
    </Router>
  );
};
