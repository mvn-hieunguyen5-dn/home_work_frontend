import React, { useEffect, useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
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
          <li className="usercard" key={item.id}>
            <Link
              className="usercard"
              
              to={`/product/detail/${item.id}`}
            >
              <div className="avatar">
                <img src={item.image} alt="" className="avatar child" />
              </div>

              <h3>{item.title}</h3>
              <span className="email">$ {item.price}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
