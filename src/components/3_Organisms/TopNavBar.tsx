import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
interface Props {
  navItems: { name: string; route: string; icon: string }[];
}

export const TopNavBar = ({ navItems }: Props) => {
  return (
    <nav className="bg-gray-900">
      <div className="flex justify-end p-4 space-x-6 text-white">
        {navItems.map((item) => (
          <Link to={item.route} key={item.name} className="hover:bg-gray-600">
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
