import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { StripeProvider, useStripe, StripeElement, StripeElements } from "../.";

const App = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            Home <Link to="/checkout">Checkout</Link>
          </div>
        )}
      ></Route>
      <Route path="/checkout" component={Checkout}></Route>
    </Switch>
  );
};

const Checkout = ({ match: { url } }) => {
  return (
    <StripeProvider apiKey="asdasd">
      Checkout
      <Switch>
        <Route
          exact
          path={`${url}`}
          render={() => <Link to={`${url}/payment`}>Payment</Link>}
        ></Route>
        <Route path={`${url}/payment`} component={Payment}></Route>
      </Switch>
    </StripeProvider>
  );
};

const Payment = () => {
  return (
    <StripeElements>
      {elements => (
        <>
          <StripeElement />
        </>
      )}
    </StripeElements>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
