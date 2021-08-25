import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface Props {
  navItems: { name: string; route: string }[];
}

export const NavLinkRepeater = (props: Props) => {
  return (
    <div>
      {props.navItems.map((item) => (
        <Link
          to={item.route}
          key={item.name}
          className="flex justify-end p-4 space-x-6 text-white"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
