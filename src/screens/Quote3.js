import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

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
    marginTop: 200,
    display: "flex",
    flexDirection: "row",
    minWidth: 700,
  },
}));

export default function Quote3() {
  const classes = useStyles();
  const history = useHistory();

  const [vehicle, setVehicle] = useState("initialState");

  useEffect(() => {
    // let rego = localStorage.getItem("rego");
    // let licence = localStorage.getItem("licence");
    // let businessUse = localStorage.getItem("businessUse");
    setVehicle(localStorage.getItem("vehicle"));
    // let bicycleValue = localStorage.getItem("bicycleValue");
  }, []);

  console.log(vehicle);
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
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            if (vehicle === "bicycle") {
              history.push("/quote");
            } else {
              history.push("/quote2");
            }
          }}
        >
          Back
        </Button>

        <div className={classes.growth} />
      </div>
    </div>
  );
}
