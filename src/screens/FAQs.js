import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  growth: {
    flexGrow: 1,
  },
  nav: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    minWidth: 700,
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
      <div className={classes.nav}>
        <Link to="/">
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        <div className={classes.growth} />
      </div>
    </div>
  );
}
