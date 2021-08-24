import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface Props {}

export const LeftNavBar = (props: Props) => {
  return (
    <Router>
      <nav className="bg-gray-900 w-1/6 h-screen">
        <div className="flex flex-col p-4 text-white">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                clip-rule="evenodd"
              />
              <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
            </svg>
            All Projects
          </Link>
          <Link to="/createProject">Create Project</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>
    </Router>
  );
};
