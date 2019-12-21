import React, { useState, Component } from "react";
import { Router, Link } from "@reach/router";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";

// import "@elastic/eui/dist/eui_theme_light.css";
import ReportPage from "./pages/ReportPage";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

const setTheme = theme => {
  localStorage.setItem("theme", theme);
  window.location.reload();
};

export default class App extends Component {
  componentWillMount() {
    if (localStorage.getItem("theme") === "dark") {
      const theme = "eui_theme_dark";
      const cssElement = document.getElementById("theme_css");
      if (cssElement) {
        const rootUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";
        const href = rootUrl + "/" + theme + ".css";
        cssElement.setAttribute("href", href);
      }
    } else {
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
        <LandingPage path="/" />
        <SignUpPage path="signup" />
        <LoginPage path="login" />

        <HomePage path="/home" setTheme={setTheme} />
        <RecordPage path="recording" />
        <ReportPage path="report" setTheme={setTheme} />
      </Router>
    );
  }
}
