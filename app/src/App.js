import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" component={Index} exact />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
