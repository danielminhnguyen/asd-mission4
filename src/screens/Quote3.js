import {
  Button,
  formatMs,
  Grid,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 700,
  },
  titleWrapper: {
    minWidth: 400,
  },
  title: {
    marginTop: 70,
    marginBottom: 70,
    fontWeight: 900,
    "& span": {
      color: "red",
    },
  },
  nav: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    minWidth: 700,
  },
}));

export default function Quote3() {
  const classes = useStyles();

  return (
    <div className="column flex-center">
      <div className={classes.container}>
        <div className={classes.titleWrapper}>
          <Typography className={classes.title} variant="h1" color="primary">
            Choose an insurance policy for your motorcycle
          </Typography>
        </div>
        <Grid container className={classes.quote}>
          <Grid item xs={3}>
            <Typography variant="h3" color="primary">
              General
            </Typography>
            <Typography color="primary" paragraph={true}>
              Perks
            </Typography>
            <Typography variant="h2" paragraph={true}>
              $265
            </Typography>
            <Button variant="contained" color="primary">
              Purchase
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" color="primary">
              Third Party
            </Typography>
            <Typography color="primary" paragraph={true}>
              Perks
            </Typography>
            <Typography variant="h2" paragraph={true}>
              $375
            </Typography>
            <Button variant="contained" color="primary">
              Purchase
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" color="primary">
              Premium
            </Typography>
            <Typography color="primary" paragraph={true}>
              Perks
            </Typography>
            <Typography variant="h2" paragraph={true}>
              $450
            </Typography>
            <Button variant="contained" color="primary">
              Purchase
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.nav}>
        <Link to="/quote2">
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        <div className={classes.growth} />
      </div>
    </div>
  );
}
