import React from "react";
import { Router, Link } from "@reach/router";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <RecordPage path="recording" />
    </Router>
  );
}

export default App;
