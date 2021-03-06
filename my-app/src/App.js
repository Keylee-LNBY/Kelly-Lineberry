import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          {/* you can only match ONE route inside */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/homepage" component={HomePage} />
          {/* take home for anything else */}
          <Route component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;