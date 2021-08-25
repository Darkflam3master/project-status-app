import React from "react";
import { LeftNavBar } from "./components/3_Organisms/LeftNavBar";
import { TopNavBar } from "./components/3_Organisms/TopNavBar";

const topNavItems = [
  { name: "Home", route: "/", icon: "none" },
  { name: "Create Project", route: "/create", icon: "none" },
  { name: "Admin", route: "/admin", icon: "none" },
];

const leftNavItems = [
  { name: "All Projects", route: "/", icon: "OpenFolder" },
  { name: "Red Projects", route: "/red", icon: "ExclaimTriangle" },
  { name: "Yellow Projects", route: "/yellow", icon: "ExclaimCircle" },
  { name: "Green Projects", route: "/green", icon: "ThumbsUp" },
  { name: "Create Projects", route: "/create", icon: "Plus" },
  { name: "Admin", route: "/admin", icon: "Lock" },
];

function App() {
  return (
    <div className="App">
      <TopNavBar navItems={topNavItems}></TopNavBar>
      <LeftNavBar navItems={leftNavItems}></LeftNavBar>
    </div>
  );
}

export default App;
