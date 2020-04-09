import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routes";
import TopBar from "components/topBar";
import Authentication from "pages/authentication";

// create App component, it will be simple stateless function
const App = () => {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Authentication />
        <Routes />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
