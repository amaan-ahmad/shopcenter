import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";
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
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
