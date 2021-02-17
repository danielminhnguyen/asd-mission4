import {
  Button,
  ButtonBase,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import classNames from "classnames";

import { ReactComponent as Car } from "../assets/images/car.svg";
import { ReactComponent as Motorcycle } from "../assets/images/motorcycle.svg";
import { ReactComponent as Truck } from "../assets/images/truck.svg";
import { ReactComponent as Bicycle } from "../assets/images/bicycle.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 150,
    height: 150,
    margin: 20,
    padding: 15,
    backgroundColor: "#C4C4C4",
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#49B1ED",
  },
  titleWrapper: {
    minWidth: 700,
  },
  title: {
    marginTop: 70,
    marginBottom: 70,
    fontWeight: 900,
    "& span": {
      color: "red",
    },
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

export default function Quote() {
  const [vehicle, setVehicle] = useState(0);

  const classes = useStyles();

  const handleClick = () => {};

  const renderContent = () => {
    switch (vehicle) {
      case 1:
        return (
          <div>
            <Typography>How mu</Typography>
          </div>
        );
        break;
      case 2:
        return <div></div>;
        break;
      case 3:
        return <div></div>;
        break;
      case 4:
        return <div></div>;
        break;

      default:
        break;
    }
  };
  return (
    <div className="column flex-center">
      <div className={classes.titleWrapper}>
        <Typography className={classes.title} variant="h2" color="primary">
          Let's get you started
        </Typography>
        <Typography className={classes.title} variant="h4">
          What type of <span>vehicle</span> are you insuring?
        </Typography>
      </div>
      <div className="row">
        <div className="column flex-center">
          <ButtonBase
            focusRipple
            className={classNames(
              vehicle === 1 ? classes.active : "",
              classes.button
            )}
            onClick={() => setVehicle(1)}
          >
            <Car />
          </ButtonBase>
          <Typography variant="h4">Car</Typography>
        </div>

        <div className="column flex-center">
          <ButtonBase
            focusRipple
            className={classNames(
              vehicle === 2 ? classes.active : "",
              classes.button
            )}
            onClick={() => setVehicle(2)}
          >
            <Motorcycle />
          </ButtonBase>
          <Typography variant="h4">Motorcycle</Typography>
        </div>

        <div className="column flex-center">
          <ButtonBase
            focusRipple
            className={classNames(
              vehicle === 3 ? classes.active : "",
              classes.button
            )}
            onClick={() => setVehicle(3)}
          >
            <Truck />
          </ButtonBase>
          <Typography variant="h4">Truck</Typography>
        </div>

        <div className="column flex-center">
          <ButtonBase
            focusRipple
            className={classNames(
              vehicle === 4 ? classes.active : "",
              classes.button
            )}
            onClick={() => setVehicle(4)}
          >
            <Bicycle />
          </ButtonBase>
          <Typography variant="h4">Bicycle</Typography>
        </div>
      </div>

      <div className={classes.titleWrapper}>
        <Typography className={classes.title} variant="h4">
          What is the <span>number plate?</span>
        </Typography>
        <div>
          <OutlinedInput placeholder="e.g MCU208" />
          <Button variant="contained" color="secondary">
            I don't have one
          </Button>
        </div>
      </div>

      <div className={classes.titleWrapper}>
        <Typography className={classes.title} variant="h4">
          How much would you like to insure your <span>bicycle</span> for?
        </Typography>
        <div>
          <OutlinedInput placeholder="$10,000"></OutlinedInput>
        </div>
      </div>

      <div className={classes.nav}>
        <Button variant="contained" color="primary">
          Previous
        </Button>
        <div className={classes.growth} />
        <Link to="/quote2">
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}
