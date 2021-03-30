import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import test from "./Cover.jpg";
import "./App.css";
import 'fontsource-roboto';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Components/login";
import SignUp from "./Components/signup";
import { Col, Row } from "react-bootstrap";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="bg-image"></div>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/signin"}></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/signin"}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Grid container spacing={0}>
              <Grid item xs={1}>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/signin" component={Login} />
                  <Route path="/signup" component={SignUp} />
                </Switch>
              </Grid>
            </Grid>

            {/* <Container>
              <Row>
                <Col xs={3} md={7}>
              
                </Col>
                <Col xs={1} md={5} style={{ backgroundColor: "#c5c  c7" }}>
                </Col>
              </Row>
            </Container> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
