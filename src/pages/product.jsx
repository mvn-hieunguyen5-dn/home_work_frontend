import React, { Suspense } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

export default function product() {
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
          <Route exact path="/product/detail/:id">
            <ProductDetail />
          </Route>
          <Route exact path="/product">
            <ProductList />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
