import React, { useEffect, useState } from "react";
import "./product.css";
import ProductItem from "./productItem";
export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      }).then(async (res) => {
        setData(await res.clone().json());
      });
    }

    getData();
  }, []);

  return (
    <div className="main">
      <h2>Product Table</h2>
      <ul className="userlist">
        {data.map((item) => (
          <ProductItem item={item} key={item.id}>
          </ProductItem>
        ))}
      </ul>
      
    </div>
  );
}
