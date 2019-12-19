import React, { useState, Component } from "react";
import { Router, Link } from "@reach/router";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";

// import "@elastic/eui/dist/eui_theme_light.css";
import ReportPage from "./pages/ReportPage";

const setTheme = theme => {
  localStorage.setItem("theme", theme);
  window.location.reload();
};

export default class App extends Component {
  componentWillMount() {
    if (localStorage.getItem("theme") === "dark") {
      // require("@elastic/eui/dist/eui_theme_dark.css");
      // let stylesheet = document.styleSheets[0];
      // stylesheet.href = "@elastic/eui/dist/eui_theme_dark.css";
      const theme = "eui_theme_dark";
      const cssElement = document.getElementById("theme_css");
      if (cssElement) {
        const rootUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";
        const href = rootUrl + "/" + theme + ".css";
        cssElement.setAttribute("href", href);
      }
    } else {
      // require("@elastic/eui/dist/eui_theme_light.css");
      // let stylesheet = document.styleSheets[0];
      // stylesheet.href = "@elastic/eui/dist/eui_theme_light.css";
      const theme = "eui_theme_light";
      const cssElement = document.getElementById("theme_css");
      if (cssElement) {
        const rootUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";
        const href = rootUrl + "/" + theme + ".css";
        cssElement.setAttribute("href", href);
      }
    }
  }

  render() {
    return (
      <Router>
        <HomePage
          path="/"
          setTheme={setTheme}
        />
        <RecordPage path="recording" />
        <ReportPage path="report" />
      </Router>
    );
  }
}
