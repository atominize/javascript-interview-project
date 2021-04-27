import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";

export default function Repository({ repo }) {
  // console.log(repo);
  return (
    <>
      <CssBaseline />
      <Typography color="primary" variant="h6">
        {repo.name}
      </Typography>
    </>
  );
}
