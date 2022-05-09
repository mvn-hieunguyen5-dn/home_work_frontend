import React, { useEffect, useState } from "react";
import "./product.css";
import ProductItem from "./productItem";
import { apiProductGetList } from "../../../api/product/product.api";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiProductGetList().then((e) => {
      setData(e.data);
    });
  }, []);

  return (
    <div className="main">
      <h2>Product Table</h2>
      <ul className="userlist">
        {data.map((item) => (
          <ProductItem item={item} key={item.id}></ProductItem>
        ))}
      </ul>
    </div>
  );
}
