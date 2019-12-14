import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";

if (localStorage.getItem("theme") === "dark") {
  require('@elastic/eui/dist/eui_theme_dark.css');
} else {
  require('@elastic/eui/dist/eui_theme_dark.css');
  require('@elastic/eui/dist/eui_theme_light.css');
}

const setTheme = theme => {
  localStorage.setItem("theme", theme);
  window.location.reload();
};

function App() {

  return (
    <Router>
      <HomePage path="/" setTheme={setTheme} />
      <RecordPage path="recording" />
    </Router>
  );
}

export default App;
