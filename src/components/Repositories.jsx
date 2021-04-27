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

export default function Repositories(props) {
  const username = props.history.location.state;
  // console.log(username);
  const [isRepoLoaded, setIsRepoLoaded] = useState(false);
  const [isOrgsLoaded, setIsOrgsLoaded] = useState(false);
  const [userRepo, setUserRepo] = useState([]);
  const [userOrgs, setUserOrgs] = useState([]);

  useEffect(() => {
    getRepos(username.username).then((result) => {
      setUserRepo(result);
      setIsRepoLoaded(true);
    });
  }, []);

  useEffect(() => {
    getUserData(username.username).then((userData) => {
      setUserOrgs(userData.orgs);
      if (userOrgs.length === 0) return;
      setIsOrgsLoaded(true);
    });
  }, []);

  return (
    <main>
      <CssBaseline />
      <Container maxWidth="md" align="center">
        <Grid container spacing={4}>
          {isRepoLoaded &&
            userRepo.map((repo) => {
              return (
                <Grid item key={repo.id} xs={12} sm={6} md={6}>
                  <Card>
                    <CardContent>
                      <Repository repo={repo} />
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
      {/* {isRepoLoaded &&
          userRepo.map((repo) => {
            return <Repository key={repo.id} repo={repo} />;
          })} */}
      <Container maxWidth="sm" align="center">
        {isOrgsLoaded && (
          <Button variant="contained" color="primary" size="large">
            View Organisations
          </Button>
        )}
      </Container>
    </main>
  );
}
