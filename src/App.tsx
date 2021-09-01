import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/5_Pages/Home";

import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { setInitialData } from "./redux/slices/projectCounter";

function App() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   fetch("http://localhost:8000/projects")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // setProjectData(data);
  //       dispatch(setInitialData(data));
  //     });
  // }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
