import React from "react";
import { LeftNavBar } from "./components/LeftNavBar";
import { TopNavBar } from "./components/TopNavBar";

function App() {
  return (
    <div className="App">
      <TopNavBar></TopNavBar>
      <LeftNavBar></LeftNavBar>
      {/* <LeftNavBar></LeftNavBar> */}
    </div>
  );
}

export default App;
