import "./asset/css/App.css";

// import React, { Component } from "react";
import Header from "./components/layout/header";
import Home from "./pages/home";
// import Form from "./components/Auth/logInForm";
import Authen from "./pages/authen";
import ProductPage from "./pages/product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="main">
            <Header />
            <Suspense>
              <Switch>
                <Route path="/product">
                  <ProductPage />
                </Route>

                <Route path="/auth">
                  <Authen />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </Router>
      </Provider>
    </>
  );
}
