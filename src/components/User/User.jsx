import React, { useEffect, useState } from "react";
import {
  Typography,
  CssBaseline,
  Container,
  Button,
  TextField,
} from "@material-ui/core";
import { isUsernameEmpty, isAValideUsername } from "../../utils/utils";

import styles from "../../styles";

const User = (props) => {
  const classes = styles();

  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUsernameEmpty(username)) {
      setText("Enter Username");
      setError(true);
      return;
    } else {
      setError(false);
    }
    isAValideUsername(username)
      .then((result) => {
        return result;
      })
      .then((bool) => {
        if (bool) {
          props.history.push("/repository", { username });
        } else {
          setText("Invalid username");
          setError(true);
        }
      });
    // if (!proceed) {
    // }
    // console.log(isAValideUsername(username));
  };

  useEffect(() => {
    props.setAppBarName("Github Project");
  });

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
                error={error}
                helperText={text}
                value={username}
                onChange={handleInput}
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
};

export default User;
