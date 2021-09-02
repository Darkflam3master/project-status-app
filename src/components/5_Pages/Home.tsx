//react
import React, { useEffect, useState } from "react";

//components
import { StatusCardRepeater } from "../2_Molecules/StatusCardRepeater/StatusCardRepeater";
import { LeftNavBar } from "../3_Organisms/LeftNavBar";
import { TopNavBar } from "../3_Organisms/TopNavBar";

//helper
import { projectStatusCount } from "../helpers/helpers";

//redux
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectCount, setInitialData } from "../../redux/slices/projectCounter";

//ag grid
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector(selectCount);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setInitialData(data));
      });
  }, [dispatch]);

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

  return (
    <main className="flex flex-col flex-nowrap">
      <TopNavBar navItems={topNavItems}></TopNavBar>
      <div className="flex h-screen bg-gray-100 flex-row">
        <div className="bg-gray-900 w-3/12">
          <LeftNavBar navItems={leftNavItems}></LeftNavBar>
        </div>

        <div id="cards-container" className="p-6 w-full h-1/6">
          <StatusCardRepeater cards={cards}></StatusCardRepeater>
          <div className="m-5">
            <div className=" bg-blue-400 text-xl text-white font-light rounded p-4">
              All Projects
            </div>
            <div className=" border border-gray-400 border-t-0">blank</div>
          </div>
        </div>
      </div>
    </main>

    // <main className="grid grid-cols-6">
    //   <div className="col-span-6">
    //     <TopNavBar navItems={topNavItems}></TopNavBar>
    //   </div>

    //   <div className="col-span-1">
    //     <LeftNavBar navItems={leftNavItems}></LeftNavBar>
    //   </div>

    //   <div id="cards-container" className="col-span-5 mt-4">
    //     <StatusCardRepeater cards={cards}></StatusCardRepeater>
    //   </div>
    // </main>
  );
};
