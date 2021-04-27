import React from "react";
import { CssBaseline, Container, Typography } from "@material-ui/core";

export default function Repository({ repo }) {
  return (
    <>
      <CssBaseline />
      <Typography variant="h5">{repo.name}</Typography>
    </>
  );
}
