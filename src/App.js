import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form";
import Panoramas from "./components/Panoramas";
import Schedule from "./components/Schedule";
import ErrorPage from "./components/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="helvetica">
        <Route exact path="/" component={Form} />
        <Route exact path="/panoramas" component={Panoramas} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/error" component={ErrorPage} />
      </div>
    </Router>
  );
}

export default App;
