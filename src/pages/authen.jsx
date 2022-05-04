import React, { Suspense } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import PrivateRoute from "../core/guard/PrivateRoute"
export default function authen() {
  const Account = React.lazy(() => import( "../components/Auth/Account"));
  const Form = React.lazy(() => import( "../components/Auth/logInForm"));
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/auth/login" >
            <Form />
          </Route>
          <PrivateRoute exact path="/auth/MyAccount">
            <Account />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
