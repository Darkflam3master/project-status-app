import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { Admin } from "./components/5_Pages/Admin";
import { CreateProject } from "./components/5_Pages/CreateProject";
import { Home } from "./components/5_Pages/Home";

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
        <Route path="/create">
          <CreateProject />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>

      {/* <Switch>
        <Route exact path="/" component={withRouter(Home)} />

        <Route path="/create" component={withRouter(CreateProject)} />

        <Route exact path="/admin" component={withRouter(Admin)} />
      </Switch> */}
    </Router>
  );
}

export default App;
