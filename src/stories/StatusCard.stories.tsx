import React from "react";
import { Meta, Story } from "@storybook/react";
import { StatusCard } from "../components/1_Atoms/Card/StatusCard";

const meta: Meta = {
  title: "StatusCard",
  component: StatusCard,
};

export default meta;

export const Default = () => (
  <StatusCard
    icon="OpenFolder"
    name="TOTAL PROJECTS"
    count={123}
    color="purple"
  ></StatusCard>
);
