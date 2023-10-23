import React from "react";
import Home from "./UI/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./UI/Service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Service" exact component={Service} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
