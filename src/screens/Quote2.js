import {
  Button,
  makeStyles,
  OutlinedInput,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { checkRego, checkLicence } from "../utils";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import DriverLicence from "../assets/images/Photo-driver-licence-content-graphic.png";

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
  buttonActive: {
    backgroundColor: theme.palette.secondary.main,
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
  image: {
    width: 600,
    height: "auto",
  },
}));

export default function Quote2() {
  const classes = useStyles();
  const history = useHistory();

  const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const successIcon = <CheckCircleOutlineIcon className={classes.success} />;
  const errorIcon = <ErrorOutlineIcon className={classes.error} />;

  // number plate question
  const [rego, setRego] = useState("");
  const [regoValidation, setregoValidation] = useState(true);
  // driver licence
  const [licence, setLicence] = useState("");
  const [licenceValidation, setLicenceValidation] = useState(false);
  // business use questions
  const [businessUse, setBusinessUse] = useState(false);

  const handleChangeRego = (event) => {
    let value = event.target.value;
    setRego(value);
    setregoValidation(checkRego(value));
  };

  const handleChangeLicence = (event) => {
    let value = event.target.value;
    setLicence(value);
    setLicenceValidation(checkLicence(value));
  };

  const handleClick = () => {
    if (regoValidation === true && licenceValidation === true) {
      localStorage.setItem("rego", rego);
      localStorage.setItem("licence", licence);
      localStorage.setItem("businessUse", businessUse);
      history.push("/quote3");
    } else {
      alert("Please enter all the required fields");
    }
  };

  useEffect(() => {
    let RegoStorage = localStorage.getItem("rego");
    setRego(RegoStorage);
    setregoValidation(checkRego(RegoStorage));

    let LicenceStorage = localStorage.getItem("licence");
    setLicence(LicenceStorage);
    setLicenceValidation(checkLicence(LicenceStorage));

    setBusinessUse(localStorage.getItem("businessUse"));
  }, []);

  return (
    <div className="column flex-center">
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
        <OutlinedInput
          value={rego}
          onChange={handleChangeRego}
          endAdornment={regoValidation ? successIcon : errorIcon}
        >
          <CheckCircleOutlineIcon />
        </OutlinedInput>
        <Typography className={classes.title} variant="h4">
          Enter your <span>driver licence number</span>
          <Tooltip
            className={classes.tooltip}
            placement="right-start"
            title={
              <>
                <img className={classes.image} src={DriverLicence} alt="" />
              </>
            }
          >
            <HelpOutlineIcon fontSize="small" />
          </Tooltip>
        </Typography>

        <OutlinedInput
          placeholder="e.g 5E0CG2H"
          value={licence}
          onChange={handleChangeLicence}
          endAdornment={licenceValidation ? successIcon : errorIcon}
        />
        <Typography className={classes.title} variant="h4">
          Do you use your motorcycle for <span>business?</span>
        </Typography>
        <Button
          variant="contained"
          className={businessUse ? classes.buttonActive : ""}
          onClick={() => setBusinessUse(true)}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          className={!businessUse ? classes.buttonActive : ""}
          onClick={() => setBusinessUse(false)}
        >
          No
        </Button>
      </div>
      <div className={classes.nav}>
        <Link to="/quote">
          <Button variant="contained" color="primary">
            Back{" "}
          </Button>
        </Link>
        <div className={classes.growth} />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Get Quote
        </Button>
      </div>
    </div>
  );
}
