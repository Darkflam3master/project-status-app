import React from "react";
import {
  FaFolderOpen,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaThumbsUp,
  FaPlus,
  FaLock,
  FaFolder,
} from "react-icons/fa";

interface Props {
  name?: string;
  count?: number;
  color?: string;
  icon?: string;
}

export const StatusCard = ({ name, count, color, icon }: Props) => {
  return (
    <div className="">
      <FaFolderOpen></FaFolderOpen>
    </div>
  );
};
