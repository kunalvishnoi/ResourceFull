import React from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Index from "./Pages/dashboard";
import history from "./util/history.js";
function App() {
  return (
    <BrowserRouter>
      <>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Index} exact />
          </Switch>
        </Router>
      </>
    </BrowserRouter>
  );
}

export default App;
