import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import User from "./components/User";
import Repositories from "./components/Repositories";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Github Projects</Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/organisation">Organisations</Route>
          <Route path="/repository" component={Repositories} />
          <Route path="/" component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
