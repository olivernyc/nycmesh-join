import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form";
import Request from "./components/Request";
import Schedule from "./components/Schedule";

function App() {
  return (
    <Router>
      <div className="helvetica">
        <Route exact path="/" component={Form} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/schedule" component={Schedule} />
      </div>
    </Router>
  );
}

export default App;
