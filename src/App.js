import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import User from "./components/User";
import Repositories from "./components/Repositories";
import { useState } from "react";

function App() {
  const [appBarName, setAppBarName] = useState("Github Project");

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">{appBarName}</Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/organisation">Organisations</Route>
          <Route
            path="/repository"
            render={(props) => (
              <Repositories setAppBarName={setAppBarName} {...props} />
            )}
          />
          <Route path="/" component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
