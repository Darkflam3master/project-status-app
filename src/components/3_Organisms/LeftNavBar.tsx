import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { IconRenderer } from "../helpers/helpers";

interface Props {
  navItems: { name: string; route: string; icon: string }[];
}

export const LeftNavBar = ({ navItems }: Props) => {
  return (
    <nav className="bg-gray-900">
      <div className="flex flex-col p-4 text-white divide-y-2 divide-gray-800">
        {navItems.map((item) => (
          <Link
            to={item.route}
            key={item.name}
            className="flex flex-row items-center p-4 hover:bg-gray-600"
          >
            <div className="mr-2">{IconRenderer(item.icon)}</div>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
