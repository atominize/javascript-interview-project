import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  Container,
  Button,
  TextField,
} from "@material-ui/core";

import styles from "../styles";

export default function User(props) {
  props.setAppBarName("Github Project");
  const classes = styles();

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(props);
    props.history.push("/repository", { username });
  };

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.root}>
          <Container maxWidth="sm">
            <form align="center">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Welcome
              </Typography>
              <Typography variant="h6">
                {" "}
                Please Enter Your Github Username:
              </Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                required
                label="required"
                size="small"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <Container maxWidth="sm" fixed>
                <Button
                  type="submit"
                  className={classes.buttons}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Container>
            </form>
          </Container>
        </div>
      </main>
    </>
  );
}
