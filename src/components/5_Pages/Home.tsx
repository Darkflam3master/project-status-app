import React, { useEffect } from "react";
import { StatusCardRepeater } from "../2_Molecules/StatusCardRepeater/StatusCardRepeater";
import { LeftNavBar } from "../3_Organisms/LeftNavBar";
import { TopNavBar } from "../3_Organisms/TopNavBar";

interface Props {}

export const Home = (props: Props) => {
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
    {
      name: "TOTAL PROJECTS",
      icon: "OpenFolder",
      count: 107,
      color: "purple",
    },
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

  useEffect(() => {
    console.log("useEffect ran");
    fetch("http://localhost:8000/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        projectStatusCount(data);
      });
  }, []);

  const projectStatusCount = (
    projects: {
      id: number;
      projectName: string;
      projectManager: string;
      overallStatus: string;
      percentageComplete: number;
      modifiedDate: string;
    }[]
  ) => {
    let total = 0,
      red = 0,
      yellow = 0,
      green = 0;

    for (let project of projects) {
      switch (project.overallStatus) {
        case "R":
          red += 1;
          break;
        case "Y":
          yellow += 1;
          break;
        case "G":
          green += 1;
          break;
      }
    }

    total = red + yellow + green;

    const projectCounts = {
      total,
      red,
      yellow,
      green,
    };

    console.log(projectCounts);

    return { total, red, yellow, green };
  };

  return (
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
  );
};
