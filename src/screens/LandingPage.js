import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as OffRoad } from "../assets/images/off_road.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 10,
    minWidth: 150,
  },
  image: {
    width: "100%",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={6} className="column">
          <Typography variant="h2" color="primary" align="left">
            Turners Car Insurance.
          </Typography>
          <Typography variant="h2" color="primary" align="left">
            We will be there.
          </Typography>
          <div>
            <Link to={`${process.env.PUBLIC_URL}/quote`}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Get a quote
              </Button>
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/faq`}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                FAQs
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.image}>
            <OffRoad />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
