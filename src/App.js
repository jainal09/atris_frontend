import React, { useState, Component } from "react";
import { Router, Link } from "@reach/router";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";

import "@elastic/eui/dist/eui_theme_light.css";

const setTheme = theme => {
  localStorage.setItem("theme", theme);
  window.location.reload();
};

export default class App extends Component {
  componentWillMount() {
    // if (localStorage.getItem("theme") === "dark") {
    //   require("@elastic/eui/dist/eui_theme_dark.css");
    //   let stylesheet = document.styleSheets[0];
    //   stylesheet.href = "@elastic/eui/dist/eui_theme_dark.css";
    // } else {
    //   require("@elastic/eui/dist/eui_theme_light.css");
    //   let stylesheet = document.styleSheets[0];
    //   stylesheet.href = "@elastic/eui/dist/eui_theme_light.css";
    // }
  }

  render() {
    return (
      <Router>
        <HomePage path="/" setTheme={setTheme} />
        <RecordPage path="recording" />
      </Router>
    );
  }
}
