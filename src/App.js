import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
