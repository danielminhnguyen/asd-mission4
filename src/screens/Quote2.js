import {
  Button,
  formatMs,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
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
  buttonActive: {
    backgroundColor: theme.palette.secondary.main,
  },
  success: {
    color: "green",
  },
  error: {
    color: "red",
  },
}));

export default function Quote2() {
  const classes = useStyles();
  const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const successIcon = <CheckCircleOutlineIcon className={classes.success} />;
  const errorIcon = <ErrorOutlineIcon className={classes.error} />;

  // number plate question
  const [rego, setRego] = useState("");
  const [regoValidation, setregoValidation] = useState(errorIcon);
  // driver licence
  const [licence, setLicence] = useState("");
  const [licenceValidation, setLicenceValidation] = useState(errorIcon);
  // business use questions
  const [businessUse, setBusinessUse] = useState(false);

  const handleChangeRego = (event) => {
    let value = event.target.value;
    setRego(value);
    if (
      specialChar.test(value) ||
      value.toString().length > 6 ||
      value === ""
    ) {
      setregoValidation(errorIcon);
    } else {
      setregoValidation(successIcon);
    }
  };

  const handleChangeLicence = (event) => {
    let value = event.target.value;
    setLicence(value);
    if (specialChar.test(value) || value.toString().length !== 8) {
      setLicenceValidation(errorIcon);
    } else {
      setLicenceValidation(successIcon);
    }
  };

  return (
    <div className="column flex-center">
      <div className={classes.titleWrapper}>
        <Typography className={classes.title} variant="h4">
          What is the <span>number plate?</span>
        </Typography>
        <OutlinedInput
          value={rego}
          onChange={handleChangeRego}
          endAdornment={regoValidation}
        >
          <CheckCircleOutlineIcon />
        </OutlinedInput>
        <Typography className={classes.title} variant="h4">
          Enter your <span>driver licence number</span>
        </Typography>
        <OutlinedInput
          placeholder="e.g 5E0CG2H"
          value={licence}
          onChange={handleChangeLicence}
          endAdornment={licenceValidation}
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
      <Link to="/quote3">
        <Button variant="contained" color="primary">
          Get Quote
        </Button>
      </Link>
    </div>
  );
}
