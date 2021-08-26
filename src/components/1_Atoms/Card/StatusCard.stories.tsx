import React from "react";
import { Meta, Story } from "@storybook/react";
import { StatusCard } from "./StatusCard";

const meta: Meta = {
  title: "StatusCard",
  component: StatusCard,
};

export default meta;

export const Default = () => (
  <StatusCard
    icon="openfolder"
    name="name"
    count={123}
    color="purple"
  ></StatusCard>
);
