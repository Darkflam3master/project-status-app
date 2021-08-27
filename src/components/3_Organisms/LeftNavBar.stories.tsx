import React from "react";
import { Meta, Story } from "@storybook/react";
import { LeftNavBar } from "./LeftNavBar";

const meta: Meta = {
  title: "LeftNavBar",
  component: LeftNavBar,
};

export default meta;

const leftNavItems = [
  { name: "All Projects", route: "/", icon: "OpenFolder" },
  { name: "Red Projects", route: "/red", icon: "ExclaimTriangle" },
  { name: "Yellow Projects", route: "/yellow", icon: "ExclaimCircle" },
  { name: "Green Projects", route: "/green", icon: "ThumbsUp" },
  { name: "Create Projects", route: "/create", icon: "Plus" },
  { name: "Admin", route: "/admin", icon: "Lock" },
];

export const Default = () => <LeftNavBar navItems={leftNavItems}></LeftNavBar>;
