import React from "react";
import { StatusCardRepeater } from "./components/2_Molecules/StatusCardRepeater/StatusCardRepeater";
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

const cards = [
  { name: "TOTAL PROJECTS", icon: "OpenFolder", count: 107, color: "purple" },
  {
    name: "RED PROJECTS",
    icon: "ExclaimTriangle",
    count: 18,
    color: "red",
  },
  {
    name: "YELLOW PROJECTS",
    icon: "ExclaimCircle",
    count: 48,
    color: "yellow",
  },
  { name: "GREEN PROJECTS", icon: "ThumbsUp", count: 41, color: "green" },
];

function App() {
  return (
    <div className="App">
      <main className="flex flex-col flex-nowrap">
        <TopNavBar navItems={topNavItems}></TopNavBar>
        <section className="flex h-screen bg-gray-100 flex-row">
          <div className="bg-gray-900 w-3/12">
            <LeftNavBar navItems={leftNavItems}></LeftNavBar>
          </div>

          <div id="cards-container" className="p-6 h-full w-full">
            <StatusCardRepeater cards={cards}></StatusCardRepeater>
          </div>
        </section>
      </main>
      {/* <TopNavBar navItems={topNavItems}></TopNavBar> */}
      {/* <div className="grid grid-cols-6">
        <div className="col-span-1">
          <LeftNavBar navItems={leftNavItems}></LeftNavBar>
        </div>

        <div className=" col-span-5">
          <StatusCardRepeater cards={cards}></StatusCardRepeater>
        </div>
      </div> */}
    </div>
  );
}

export default App;
