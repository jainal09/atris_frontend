import React, { useState, Component } from "react";
import { Router, Link } from "@reach/router";
import { Helmet } from "react-helmet";

import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";

const setTheme = theme => {
  localStorage.setItem("theme", theme);
  window.location.reload();
};

var links = '';

export default class App extends Component {
  componentWillMount() {
    if (localStorage.getItem("theme") === "dark") {
        links = [
        {
          rel: "stylesheet",
          href: `/static/css/eui_theme_dark.css`
        }
      ];
    } else {
        links = [
        {
          rel: "stylesheet",
          href: `/static/css/eui_theme_light.css`
        }
      ];
    }
  }

  render() {
    return (
      <Router>
        <Helmet path="*" links={links} />
        <HomePage path="/" setTheme={setTheme} />
        <RecordPage path="recording" />
      </Router>
    );
  }
}
