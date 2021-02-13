import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../assets/images/TurnersLogo.svg";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import FAQs from "../screens/FAQs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 20,
  },
  content: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 20,
    height: "100%",
    widows: "100%",
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Logo />
      </div>
      <div className={classes.content}>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/faq" componen={FAQs} />
        </Switch>
      </div>
    </div>
  );
}
