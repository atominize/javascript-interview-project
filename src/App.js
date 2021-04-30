import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import User from "./components/User/User";
import Repositories from "./components/Repositories";
import Organisations from "./components/Organistions";
import { useState } from "react";

const App = () => {
  const [appBarName, setAppBarName] = useState("Github Project");

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" data-testid="app-bar-typo">
            {appBarName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route
            path="/organisation"
            render={(props) => (
              <Organisations setAppBarName={setAppBarName} {...props} />
            )}
          />
          <Route
            path="/repository"
            render={(props) => (
              <Repositories setAppBarName={setAppBarName} {...props} />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <User setAppBarName={setAppBarName} {...props} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
