import React from "react";
import {
  FaFolderOpen,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaThumbsUp,
  FaPlus,
  FaLock,
} from "react-icons/fa";

export const IconRenderer = (icon: string) => {
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

export const projectStatusCount = (
  projects: {
    id: number;
    projectName: string;
    projectManager: string;
    overallStatus: string;
    percentageComplete: number;
    modifiedDate: Date;
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
