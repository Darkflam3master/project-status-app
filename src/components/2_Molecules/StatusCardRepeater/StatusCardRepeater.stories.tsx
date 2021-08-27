import React from "react";
import { Meta, Story } from "@storybook/react";
import { StatusCardRepeater } from "./StatusCardRepeater";

const meta: Meta = {
  title: "StatusCardRepeater",
  component: StatusCardRepeater,
};

export default meta;

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

export const Default = () => (
  <StatusCardRepeater cards={cards}></StatusCardRepeater>
);
