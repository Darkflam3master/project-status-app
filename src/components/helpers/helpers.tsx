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
