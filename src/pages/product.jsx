import React, { Suspense } from "react";
import { BrowserRouter as Switch, Route, useRouteMatch } from "react-router-dom";

export default function Product() {
  let { path } = useRouteMatch();
  const ProductList = React.lazy(() =>
    import("../components/Fearture/ProductList")
  );
  const ProductDetail = React.lazy(() =>
    import("../components/Fearture/productDetail")
  );
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={`${path}/:id`}>
            <ProductDetail />
          </Route>
          <Route exact path={path} >
            <ProductList />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
