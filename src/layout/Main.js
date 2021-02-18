import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Logo } from "../assets/images/TurnersLogo.svg";
import { Switch, Route, Link } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import FAQs from "../screens/FAQs";
import Quote from "../screens/Quote";
import Quote2 from "../screens/Quote2";
import Quote3 from "../screens/Quote3";

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
console.log(process.env.PUBLIC_URL);
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <Logo />
        </Link>
      </div>
      <div className={classes.content}>
        <Switch>
          <Route
            exact
            // path={`${process.env.PUBLIC_URL}/`}
            path={`/`}
            component={LandingPage}
          />
          <Route
            exact
            path={`/faq`}
            // path={`${process.env.PUBLIC_URL}/faq`}
            component={FAQs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/quote`}
            component={Quote}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/quote2`}
            component={Quote2}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/quote3`}
            component={Quote3}
          />
        </Switch>
      </div>
    </div>
  );
}
