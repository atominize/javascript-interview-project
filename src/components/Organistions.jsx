import React, { useEffect } from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import Organisation from "./Organisation";

import styles from "../styles";

export default function Organistions(props) {
  const classes = styles();

  const data = props.history.location.state;
  const setAppBarName = props.setAppBarName;
  const userOrgs = data.userOrgs;
  const name = data.name;

  const handleGoBack = (e) => {
    e.preventDefault();
    props.history.goBack();
  };

  useEffect(() => {
    setAppBarName(`${name}'s Organisations`);
  }, [name, setAppBarName]);

  return (
    <main>
      <div className={classes.root}>
        <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="md" align="center">
          <Grid container spacing={4}>
            {userOrgs.map((org) => {
              return (
                <Grid item key={org.id} xs={12} sm={12} md={12}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Organisation org={org} />
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Container maxWidth="sm" align="center">
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleGoBack}
          >
            {`Go back to ${name}'s Repositories`}
          </Button>
        </Container>
      </div>
    </main>
  );
}
