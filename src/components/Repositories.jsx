import React, { useState, useEffect } from "react";
import { getRepos, getUserData } from "../api/github-api";
import Repository from "./Repository";
import {
  CssBaseline,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";

import styles from "../styles";

const Repositories = (props) => {
  const classes = styles();

  const username = props.history.location.state;
  const setAppBarName = props.setAppBarName;
  // console.log(username);
  const [name, setName] = useState(null);
  const [showBackdrop, setShowBackdrop] = useState(true);
  const [isRepoLoaded, setIsRepoLoaded] = useState(false);
  const [isOrgsLoaded, setIsOrgsLoaded] = useState(false);
  const [userRepo, setUserRepo] = useState([]);
  const [userOrgs, setUserOrgs] = useState([]);

  const handleViewOrgs = (e) => {
    e.preventDefault();
    // console.log(props);
    props.history.push("/organisation", { username, name, userOrgs });
  };

  const handleNewSearch = (e) => {
    e.preventDefault();
    // console.log(props);
    props.history.push("/");
  };

  useEffect(() => {
    getRepos(username.username).then((result) => {
      setUserRepo(result);
      setIsRepoLoaded(true);
      setShowBackdrop(false);
    });
  }, [username.username]);

  useEffect(() => {
    getUserData(username.username).then((userData) => {
      setUserOrgs(userData.orgs);
      // console.log(userData.user.name);
      setName(userData.user.name);
      if (userOrgs.length === 0) return;
      setIsOrgsLoaded(true);
    });
  }, [username.username, userOrgs.length]);

  useEffect(() => {
    if (name === null) {
      setName(username.username);
    }
    setAppBarName(`${name}'s Repositories`);
  }, [name, setAppBarName, username.username]);

  return (
    <main>
      <div className={classes.root}>
        <CssBaseline />
        {showBackdrop && (
          <Container className={classes.cardGrid} maxWidth="md" align="center">
            <Backdrop className={classes.backdrop} open>
              <CircularProgress color="primary" />
            </Backdrop>
          </Container>
        )}
        <Container className={classes.cardGrid} maxWidth="md" align="center">
          <Grid container spacing={4}>
            {isRepoLoaded &&
              userRepo.map((repo) => {
                return (
                  <Grid item key={repo.id} xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Repository repo={repo} />
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
        {isOrgsLoaded && (
          <Container maxWidth="sm" align="center">
            <Button
              className={classes.buttons}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleViewOrgs}
            >
              {`View ${name}'s Organisations`}
            </Button>
          </Container>
        )}
        {!isOrgsLoaded && (
          <Container maxWidth="sm" align="center">
            <Button
              className={classes.buttons}
              variant="contained"
              color="primary"
              size="large"
              disabled
            >
              {`${name} Have No Organisation`}
            </Button>
          </Container>
        )}
        <Container maxWidth="sm" align="center">
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            size="large"
            disabled={false}
            onClick={handleNewSearch}
          >
            {`Search for A Different user`}
          </Button>
        </Container>
      </div>
    </main>
  );
};

export default Repositories;
