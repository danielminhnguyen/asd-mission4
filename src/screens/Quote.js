import {
  Button,
  ButtonBase,
  makeStyles,
  OutlinedInput,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { checkRego } from "../utils";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { ReactComponent as Car } from "../assets/images/car.svg";
import { ReactComponent as Motorcycle } from "../assets/images/motorcycle.svg";
import { ReactComponent as Truck } from "../assets/images/truck.svg";
import { ReactComponent as Bicycle } from "../assets/images/bicycle.svg";
import { Link, useHistory } from "react-router-dom";

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
  success: {
    color: "green",
  },
  error: {
    color: "red",
  },
  tooltip: {
    transform: "translate(0%,-50%)",
  },
}));

export default function Quote() {
  const history = useHistory();

  const [vehicle, setVehicle] = useState("");

  const classes = useStyles();

  const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const successIcon = <CheckCircleOutlineIcon className={classes.success} />;
  const errorIcon = <ErrorOutlineIcon className={classes.error} />;

  // number plate question
  const [rego, setRego] = useState("");
  const [regoValidation, setregoValidation] = useState(false);

  const handleChangeRego = (event) => {
    let value = event.target.value;
    setRego(value);
    setregoValidation(checkRego(value));
  };

  useEffect(() => {
    let regoStorage = localStorage.getItem("rego");
    setregoValidation(checkRego(regoStorage));
    setRego(regoStorage);

    setVehicle(localStorage.getItem("vehicle"));
  }, []);

  const handleClick = () => {
    if (vehicle !== "" && regoValidation === true) {
      console.log("true");
      localStorage.setItem("rego", rego);
      localStorage.setItem("vehicle", vehicle);
      history.push("/quote2");
    } else {
      alert("Please enter all the required fields");
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
              vehicle === "car" ? classes.active : "",
              classes.button
            )}
            onClick={() => setVehicle("car")}
          >
            <Car />
          </ButtonBase>
          <Typography variant="h4">Car</Typography>
        </div>

        <div className="column flex-center">
          <ButtonBase
            focusRipple
            className={classNames(
              vehicle === "motorcycle" ? classes.active : "",
              classes.button
            )}
            onClick={() => setVehicle("motorcycle")}
          >
            <Motorcycle />
          </ButtonBase>
          <Typography variant="h4">Motorcycle</Typography>
        </div>

        <div className="column flex-center">
          <ButtonBase
            focusRipple
            className={classNames(
              vehicle === "truck" ? classes.active : "",
              classes.button
            )}
            onClick={() => setVehicle("truck")}
          >
            <Truck />
          </ButtonBase>
          <Typography variant="h4">Truck</Typography>
        </div>

        <div className="column flex-center">
          <ButtonBase
            focusRipple
            className={classNames(
              vehicle === "bicycle" ? classes.active : "",
              classes.button
            )}
            onClick={() => setVehicle("bicycle")}
          >
            <Bicycle />
          </ButtonBase>
          <Typography variant="h4">Bicycle</Typography>
        </div>
      </div>

      {vehicle === "" ? (
        <div></div>
      ) : vehicle === "bicycle" ? (
        <div className={classes.titleWrapper}>
          <Typography className={classes.title} variant="h4">
            How much would you like to insure your <span>bicycle</span> for?
          </Typography>
          <div>
            <OutlinedInput placeholder="$10,000"></OutlinedInput>
          </div>
        </div>
      ) : (
        <div className={classes.titleWrapper}>
          <Typography className={classes.title} variant="h4">
            What is the <span>number plate?</span>
            <Tooltip
              className={classes.tooltip}
              placement="right-start"
              title="These plates can have up to six characters. They can be made up of letters, numbers or a combination of both, and include captions, messages or slogans"
            >
              <HelpOutlineIcon fontSize="small" />
            </Tooltip>
          </Typography>
          <div>
            <OutlinedInput
              placeholder="e.g MCU208"
              value={rego}
              onChange={handleChangeRego}
              endAdornment={regoValidation ? successIcon : errorIcon}
            />
            <Button variant="contained" color="secondary">
              I don't have one
            </Button>
          </div>
        </div>
      )}

      <div className={classes.nav}>
        <Link to="/">
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        <div className={classes.growth} />

        <Button variant="contained" color="primary" onClick={handleClick}>
          Next
        </Button>
      </div>
    </div>
  );
}
