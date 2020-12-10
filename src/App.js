import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
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
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
