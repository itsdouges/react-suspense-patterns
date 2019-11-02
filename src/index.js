import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingComponentsBehindButton from "./loading-components/behind-button";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        component={LoadingComponentsBehindButton}
        path="/loading-components/behind-button"
      />
    </Switch>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
