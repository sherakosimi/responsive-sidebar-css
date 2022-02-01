import "./App.css";
import React from "react";
import MainPage from "./components/mainPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={MainPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
