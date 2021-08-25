import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  FaFolderOpen,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaThumbsUp,
  FaPlus,
  FaLock,
} from "react-icons/fa";

interface Props {
  navItems: { name: string; route: string; icon: string }[];
}

const iconRenderer = (icon: string) => {
  let finalIcon;

  switch (icon) {
    case "OpenFolder":
      finalIcon = <FaFolderOpen></FaFolderOpen>;
      break;
    case "ExclaimTriangle":
      finalIcon = <FaExclamationTriangle></FaExclamationTriangle>;
      break;
    case "ExclaimCircle":
      finalIcon = <FaExclamationCircle></FaExclamationCircle>;
      break;
    case "ThumbsUp":
      finalIcon = <FaThumbsUp></FaThumbsUp>;
      break;
    case "Plus":
      finalIcon = <FaPlus></FaPlus>;
      break;
    case "Lock":
      finalIcon = <FaLock></FaLock>;
      break;
  }

  return finalIcon;
};

export const LeftNavBar = ({ navItems }: Props) => {
  return (
    <Router>
      <nav className="bg-gray-900 w-1/6 h-screen">
        <div className="flex flex-col p-4 text-white divide-y-2 divide-gray-800">
          {navItems.map((item) => (
            <Link
              to={item.route}
              key={item.name}
              className="flex items-center p-4 hover:bg-gray-600"
            >
              <div className="mr-2">{iconRenderer(item.icon)}</div>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </Router>
  );
};
