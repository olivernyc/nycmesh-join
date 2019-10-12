import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div className="helvetica">
        <Header />
        <Route exact path="/" component={Form} />
      </div>
    </Router>
  );
}

export default App;
