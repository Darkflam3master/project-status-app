import React from "react";

interface Props {}

export const LeftNavBar = (props: Props) => {
  return (
    <div>
      <nav>
        <a>All Projects</a>
        <a>Red Projects</a>
        <a>Yellow Projects</a>
        <a>Green Projects</a>
        <a>Admin Projects</a>
      </nav>
    </div>
  );
};
