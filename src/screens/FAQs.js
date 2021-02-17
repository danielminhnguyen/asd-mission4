import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function FAQs() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className="column">
        <Typography variant="h3">Have questions?</Typography>
        <Typography variant="h3">We've got you covered</Typography>
        <Typography variant="h4">
          Frequently Asked Questions about Turners Insurance
        </Typography>
      </div>
    </div>
  );
}
