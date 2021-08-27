import React from "react";
import { StatusCard } from "../../1_Atoms/Card/StatusCard";

interface Props {
  cards: { name: string; icon: string; count: number; color: string }[];
}

export const StatusCardRepeater = ({ cards }: Props) => {
  return (
    <div className="inline-flex w-full space-x-6">
      {cards.map((card) => (
        <StatusCard
          name={card.name}
          icon={card.icon}
          count={card.count}
          color={card.color}
        ></StatusCard>
      ))}
    </div>
  );
};
