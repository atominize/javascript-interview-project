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
} from "@material-ui/core";

import styles from "../styles";

export default function Repositories(props) {
  const classes = styles();

  const username = props.history.location.state;
  const setAppBarName = props.setAppBarName;
  // console.log(username);
  const [name, setName] = useState(null);
  const [isRepoLoaded, setIsRepoLoaded] = useState(false);
  const [isOrgsLoaded, setIsOrgsLoaded] = useState(false);
  const [userRepo, setUserRepo] = useState([]);
  const [userOrgs, setUserOrgs] = useState([]);

  useEffect(() => {
    getRepos(username.username).then((result) => {
      setUserRepo(result);
      setIsRepoLoaded(true);
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
    if (name === null) return;
    setAppBarName(`${name}'s Repositories`);
  }, [name, setAppBarName]);

  return (
    <main>
      <div className={classes.root}>
        <CssBaseline />
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
        <Container maxWidth="sm" align="center">
          {isOrgsLoaded && (
            <Button
              className={classes.buttons}
              variant="contained"
              color="primary"
              size="large"
            >
              {`View ${name}'s Organisations`}
            </Button>
          )}
        </Container>
      </div>
    </main>
  );
}
