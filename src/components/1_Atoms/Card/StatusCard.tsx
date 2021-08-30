import React from "react";
import { IconRenderer } from "../../helpers/helpers";

interface Props {
  name: string;
  count: number;
  color: string;
  icon: string;
}

export const StatusCard = ({
  name = "Total Project",
  count = 123,
  color = "purple",
  icon = "OpenFolder",
}: Props) => {
  return (
    <div
      id="card-container"
      className={`bg-${color}-600 w-11/48 h-1/6 rounded overflow-hidden hover:bg-${color}-500`}
    >
      <div
        id="card-content"
        className="flex items-center p-5 space-x-8 text-white "
      >
        <div id="card-icon" className=" text-4xl">
          {IconRenderer(icon)}
        </div>
        <div id="card-label-container" className="flex flex-col w-20">
          <span id="card-count" className="text-2xl">
            {count}
          </span>
          <span id="card-name" className="font-thin uppercase">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};
