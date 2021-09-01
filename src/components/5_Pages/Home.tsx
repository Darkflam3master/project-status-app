import React, { useEffect, useState } from "react";
import { StatusCardRepeater } from "../2_Molecules/StatusCardRepeater/StatusCardRepeater";
import { LeftNavBar } from "../3_Organisms/LeftNavBar";
import { TopNavBar } from "../3_Organisms/TopNavBar";
import { projectStatusCount } from "../helpers/helpers";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectCount, setInitialData } from "../../redux/slices/projectCounter";

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector(selectCount);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //   setProjectData(data);
        dispatch(setInitialData(data));
      });
  }, [dispatch]);

  //   console.log(projects);

  console.log(projects);

  const statusCount = projectStatusCount(projects);

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
      count: statusCount.total,
      color: "purple",
    },
    {
      name: "RED PROJECTS",
      icon: "ExclaimTriangle",
      count: statusCount.red,
      color: "red",
    },
    {
      name: "YELLOW PROJECTS",
      icon: "ExclaimCircle",
      count: statusCount.yellow,
      color: "yellow",
    },
    {
      name: "GREEN PROJECTS",
      icon: "ThumbsUp",
      count: statusCount.green,
      color: "green",
    },
  ];

  //   const [projects, setProjectData] = useState({});

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
