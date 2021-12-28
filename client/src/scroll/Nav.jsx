import { Link } from "react-scroll";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  header: {
    background: "#ffffff",
    width: 500,
    marginLeft: 50,
  },
  tabs: {
    marginRight: 10,
    textDecoration: "none",
    fontSize: 15,
    color: "#000000",
  },
});

function Nav() {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Button>
          <Link
            className={classes.tabs}
            to="header"
            smooth={true}
            duration={100}
          >
            My Introduction
          </Link>
        </Button>
        <Button>
          <Link
            className={classes.tabs}
            to="about"
            smooth={true}
            duration={100}
            exact
          >
            About Me
          </Link>
        </Button>
        <Button>
          <Link
            className={classes.tabs}
            to="aboutproject"
            smooth={true}
            duration={100}
            exact
          >
            About Project
          </Link>
        </Button>
        <Button>
          <Link
            className={classes.tabs}
            to="contact"
            smooth={true}
            duration={100}
            exact
          >
            Contact Me
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
