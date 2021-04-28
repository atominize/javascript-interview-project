import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";

export default function Organisation({ org }) {
  return (
    <>
      <CssBaseline />
      <Typography color="primary" variant="h6">
        {org.login}
      </Typography>
      <Typography color="textSecondary" variant="subtitle1">
        {org.description}
      </Typography>
    </>
  );
}
